<?php


namespace Planck\Application\Traits;

use Planck\Helper\StringUtil;
use Planck\Model\Entity;
use Planck\Model\Exception\DoesNotExist;
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


    /**
     * @param $metadata
     * @return Entity|\Planck\Model\Repository
     */
    public function getModelInstanceByDescriptor($descriptor)
    {
        $metadata = $descriptor['metadata'];
        $values = $descriptor['entity'];

        if(!empty($metadata['fingerprint'])) {
            $entity = $this->getModelInstanceByFingerPrint($metadata['fingerprint']);
            return $entity;
        }

        if(!empty($metadata['entityType'])) {

            $entityClassName = StringUtil::separatedToClassName($metadata['entityType'], '.');

            if(!class_exists($entityClassName)) {
                throw new DoesNotExist('No entity with class name '.$entityClassName);
            }

            $entity = $this->getModelEntity($entityClassName);
            $entity->loadBy($values);
            return $entity;

        }

        throw new DoesNotExist('Can not load entity with provided data');

    }



}





