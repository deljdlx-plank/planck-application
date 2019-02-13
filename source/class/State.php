<?php

namespace Planck\Application;



class State extends \Planck\State
{

    /**
     * @var Application
     */
    protected $application;


    public function __construct(Application $application)
    {
        $this->application = $application;
    }


}



