<?php


namespace Planck\Application;

class ApplicationRegistry
{


    const DEFAULT_APPLICATION_NAME = 'plank-application-main';


    /**
     * @var Application[]
     */
    protected static $applications = [];


    /**
     * @param null $instanceName
     * @return Application
     * @throws Exception
     */
    public static function getInstance($instanceName = null)
    {
        if($instanceName === null) {
            $instanceName = static::DEFAULT_APPLICATION_NAME;
        }
        if(!array_key_exists($instanceName, static::$applications)) {
            throw new Exception('Application instance with name "'.$instanceName.'" does not exist');
        }

        return static::$applications[$instanceName];
    }


    /**
     * @param $path
     * @param null $cast
     * @param null $name
     * @return Application
     */
    public function buildApplication($path, $cast = null, $autobuild = false, $name = null)
    {

        if(!is_dir($path)) {
            throw new Exception('Path '.$path.' does not exist. Can not build application');
        }

        if($cast === null) {
            $application = new \Planck\Application($path, $autobuild);
        }
        else {
            $application =  new $cast($path, $autobuild);
        }

        $runtime = \Planck\Runtime::getInstance();
        $application->setRuntime($runtime);


        if($name === null) {
            $name = static::DEFAULT_APPLICATION_NAME;
        }

        static::$applications[$name] = $application;


        return $application;
    }

}


