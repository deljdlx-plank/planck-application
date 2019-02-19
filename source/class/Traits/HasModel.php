<?php


namespace Planck\Application\Traits;

use Planck\Model\Entity;
use Planck\Model\Model;

trait HasModel
{

    /**
     * @var Model
     */
    protected $model;


    //=======================================================
    public function setModel(Model $model)
    {
        $this->model = $model;
        return $this;
    }

    /**
     * @return Model
     */
    public function getModel()
    {
        return $this->model;
    }


    /**
     * @param $entityName
     * @return Entity
     */
    public function getModelEntity($entityName)
    {
        return $this->model->getEntity($entityName);
    }

    /**
     * @param $repositoryName
     * @return Repository
     */
    public function getModelRepository($repositoryName)
    {
        $repository =  $this->model->getRepository($repositoryName);

        return $repository;
    }

    public function getModelInstanceByFingerPrint($fingerPrint)
    {
        return $this->model->getInstanceByFingerPrint($fingerPrint);
    }



}





