<?php
namespace Planck\Application;



class Aspect extends \Planck\Aspect
{

    /**
     * @var \Planck\Application
     */
    protected $application;



    public static function getName()
    {
        return static::class;
    }

    public function __construct(Application $application)
    {
        $this->application = $application;
    }


}