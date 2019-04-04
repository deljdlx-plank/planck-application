<?php


namespace Planck\Application;

use Phi\Core\Interfaces\Renderer;

use Phi\Routing\Request;


use Phi\Traits\Introspectable;
use Planck\Application\Traits\HasModel;
use Planck\Routing\Route;
use Planck\Exception\DoesNotExist;
use Planck\Application\State\Execution;
use Planck\Runtime;
use Planck\Traits\HasAspect;

class Application extends \Phi\Application\Application implements Renderer
{

    use HasAspect;
    use HasModel;
    use Introspectable;


    const DEFAULT_MODULE_FILEPATH = 'source/class/Module';

    const DEFAULT_ROUTER_FOLDER_NAME = 'Router';


    const EVENT_BEFORE_LOADING_MODULE = 'EVENT_BEFORE_LOADING_MODULE';
    const EVENT_AFTER_LOADING_MODULE = 'EVENT_AFTER_LOADING_MODULE';


    const STATE_EXECUTION_NAME = Execution::class;



    /**
     * @var Renderer
     */
    protected $renderer;




    /**
     * @var Runtime
     */
    protected $runtime;


    /**
     * @var State[]
     */
    protected $states = [];



    public function __construct($path = null, $instanceName = null, $autobuild = true)
    {
        $path = realpath($path);

        if(!$path) {
            throw new Exception('Application can not be initialized. Path '.$path.' does not exists');
        }

        parent::__construct(realpath($path));



        $this->states[static::STATE_EXECUTION_NAME] = new Execution($this);



        $this->addEventListener(self::EVENT_BEFORE_INITIALIZE, array($this, 'doBeforeInitialize'));

        $this->addEventListener(self::EVENT_RUN_BEFORE_ROUTING, array($this, 'doBeforeRouting'));
        $this->addEventListener(self::EVENT_RUN_AFTER_ROUTING, array($this, 'doAfterRouting'));
        $this->addEventListener(self::EVENT_NO_RESPONSE, array($this, 'doOnNoResponse'));

        $this->addEventListener(self::EVENT_SUCCESS, array($this, 'doOnSuccess'));

    }


    public function setRuntime(Runtime $runtime)
    {
        $this->runtime = $runtime;
        return $this;
    }

    /**
     * @return Runtime
     */
    public function getRuntime()
    {
        return $this->runtime;
    }











    /**
     * @return \Planck\Application\State\Execution
     */
    public function getStatus()
    {
        return $this->states[static::STATE_EXECUTION_NAME];
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


    /**
     * @return Extension[]
     */
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

        $url = $route->buildURL($parameters);

        return $url;
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
