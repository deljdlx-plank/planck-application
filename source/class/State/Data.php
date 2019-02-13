<?php
namespace Planck\Application\State;



use Planck\Application\Application;
use Planck\Application\State;

class Data extends State
{

    public function __construct(Application $application)
    {
        parent::__construct($application);

        /*
        $this->addDimension(
            new Dimension('project')
        );

        $this->addDimension(
            new Dimension('user')
        );
        */



    }

}