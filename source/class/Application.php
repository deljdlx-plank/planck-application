<?php


namespace Planck\Application;

use Phi\Core\Interfaces\Renderer;
use Phi\Core\VirtualPathManager;
use Phi\Routing\Request;


use Planck\Application\Traits\HasModel;
use Planck\Routing\Route;
use Planck\Exception\DoesNotExist;
use Planck\Application\State\Execution;
use Planck\Traits\HasAspect;

class Application extends \Phi\Application\Application implements Renderer
{

    use HasAspect;
    use HasModel;


    const DEFAULT_MODULE_FILEPATH = 'source/class/Module';

    const DEFAULT_ROUTER_FOLDER_NAME = 'Router';


    const EVENT_BEFORE_LOADING_MODULE = 'EVENT_BEFORE_LOADING_MODULE';
    const EVENT_AFTER_LOADING_MODULE = 'EVENT_AFTER_LOADING_MODULE';


    const STATE_EXECUTION_NAME = Execution::class;



    /**
     * @var ApplicationState[]
     */
    protected $states;


    /**
     * @var Extension[]
     */
    protected $extensions =array();
    protected $extensionsRoutePrefix =array();


    /**
     * @var Renderer
     */
    protected $renderer;


    /**
     * @var ExtensionLoader
     */
    protected $extensionLoader;


    /**
     * @var VirtualPathManager
     */
    protected $pathManager;





    public function __construct($path = null, $instanceName = null, $autobuild = true)
    {
        $path = realpath($path);

        if(!$path) {
            throw new Exception('Application can not be initialized. Path '.$path.' does not exists');
        }

        parent::__construct(realpath($path), $instanceName, $autobuild);

        $this->extensionLoader = new ExtensionLoader();
        $this->extensionLoader->setApplication($this);


        $this->states[static::STATE_EXECUTION_NAME] = new Execution($this);



        $this->addEventListener(self::EVENT_BEFORE_INITIALIZE, array($this, 'doBeforeInitialize'));

        $this->addEventListener(self::EVENT_RUN_BEFORE_ROUTING, array($this, 'doBeforeRouting'));
        $this->addEventListener(self::EVENT_RUN_AFTER_ROUTING, array($this, 'doAfterRouting'));
        $this->addEventListener(self::EVENT_NO_RESPONSE, array($this, 'doOnNoResponse'));

        $this->addEventListener(self::EVENT_SUCCESS, array($this, 'doOnSuccess'));

    }

    /**
     * @param VirtualPathManager $pathManager
     * @return $this
     */
    public function setPathManager(VirtualPathManager $pathManager)
    {
        $this->pathManager = $pathManager;
        return $this;
    }

    /**
     * @return VirtualPathManager
     */
    public function getPathManager()
    {
        return $this->pathManager;
    }



    public function initialize()
    {

        parent::initialize();
        $this->loadExtensions();
    }




    public function addExtension($extensionName, $routeValidator = null)
    {
        $this->extensions[$extensionName] = false;
        if($routeValidator !== null) {
            $this->extensionsRoutePrefix[$extensionName] = $routeValidator;
        }
        return $this;
    }


    public function loadExtensions()
    {
        foreach ($this->extensions as $extensionName => $value) {
            if($value === false) {
                $this->extensions[$extensionName] = $this->loadExtension($extensionName);
            }
        }

        return $this;

    }

    protected function loadExtension($extensionName)
    {
        $extension= $this->extensionLoader->loadExtension($extensionName);

        $pattern = null;
        if(array_key_exists($extensionName, $this->extensionsRoutePrefix)) {
            $pattern = $this->extensionsRoutePrefix[$extensionName];
        }
        $this->registerExtension($extension, $pattern);
        return $extension;
    }




    public function getStatus()
    {
        return $this->states[static::STATE_EXECUTION_NAME];
    }




    //=======================================================

    public function registerExtension(Extension $extension, $routeValidator = null)
    {
        //$this->extensions[$extension->getName()] = $extension;


        if($routeValidator) {
            $extension->setURLPattern($routeValidator);
        }


        $extension->setApplication($this);


        foreach ($extension->getModules() as $module) {

            $routers = $module->getRouters();
            foreach ($routers as $router) {

                $router->setApplication($this);

                if(is_string($routeValidator) && $routeValidator !== '') {
                    $router->addValidator(function ($request) use ($routeValidator) {

                        if (strpos($request->getURI(), $routeValidator) !== false) {
                            return true;
                        }
                        return false;
                    });
                }
                $this->addRouter($router, get_class($router));
            }
        }


        return $this;
    }

    public function getExtension($extensionName)
    {

        //remove starting "\" in class name
        $extensionName = preg_replace('`^\\\\`', '', $extensionName);

        if(array_key_exists($extensionName, $this->extensions)) {
            return $this->extensions[$extensionName];
        }

        throw new DoesNotExist('Extension '.$extensionName.' does not exists');
    }

    public function getExtensions()
    {
        return $this->extensions;
    }









    //=======================================================
    /**
     * @return Route[]
     */
    public function getRoutes()
    {
        $routes = array();


        $registeredRouters = [];

        foreach ($this->extensions as $extension) {
            $extensionRoutes = $extension->getRoutes();
            foreach ($extensionRoutes as $routeName => $route) {

                $registeredRouters[get_class($route->getRouter())] = true;

                $key = '/'.$routeName;
                $routes[$key] = $route;
            }
        }

        foreach ($this->routers as $router) {
            if(array_key_exists(get_class($router), $registeredRouters)) {
                continue;
            }
            foreach ($router->getRoutes() as $routeName => $route) {
                $routes[$routeName] = $route;
            }
        }

        return $routes;

    }


    /**
     * @param $fingerPrint
     * @return Route|bool
     */
    public function getRouteByFingerPrint($fingerPrint)
    {
        $routes = $this->getRoutes();


        foreach ($routes as $key => $route) {


            if($key == $fingerPrint) {
                return $route;
            }
        }

        return false;
    }

    public function buildRoute($routeName, array $parameters = array())
    {
        $route = $this->getRouteByFingerPrint($routeName);
        if(!$route) {
            throw new DoesNotExist('No route with name '.$routeName.' registered');
        }

        return $route->buildURL($parameters);
    }



    //=======================================================


    public function doBeforeInitialize($event)
    {

    }

    public function doOnSuccess($event)
    {
        $this->getStatus()->ok(true);
    }

    public function doOnNoResponse($event)
    {

        $this->getStatus()->notFound(true);
    }




    public function doBeforeRouting($event)
    {


    }


    public function doAfterRouting($event)
    {

    }



    //=======================================================
    public function setRenderer(Renderer $renderer)
    {
        $this->renderer = $renderer;
    }

    /**
     * @return Renderer
     */
    public function getRenderer() : Renderer
    {
        if(!$this->renderer) {
            $renderer = new \Phi\Core\Renderer();
            $renderer->setBuffer($this->getOutput());
            $this->setRenderer($renderer);
        }
        return $this->renderer;
    }

    public function render()
    {
        return $this->getRenderer()->render();
    }

    //=======================================================




    public function run(Request $request = null, array $variables = array(), $flush = false)
    {
        $variables['application'] = $this;
        $returnValue = parent::run($request, $variables, $flush);
        return $returnValue;

    }


}
