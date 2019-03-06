<?php


namespace Planck\Application\Traits;

use Planck\Application\Exception;
use Planck\Helper\StringUtil;
use Planck\Model\Entity;
use Planck\Model\Exception\DoesNotExist;
use Planck\Model\Model;
use Planck\Model\Repository;

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
        if(!$this->model) {
            throw new Exception('Application has no model. You must initialize model with call ::setModel() before using it');
        }
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

    /**
     * @param $repositoryName
     * @return Repository
     */
    public function getModelRepositoryByEntityName($entityName)
    {
        $entity = $this->getModelEntity($entityName);
        return $entity->getRepository();
    }



    public function getModelInstanceByFingerPrint($fingerPrint)
    {
        return $this->model->getInstanceByFingerPrint($fingerPrint);
    }


    /**
     * @param $metadata
     * @return Entity|\Planck\Model\Repository
     */
    public function getModelInstanceByDescriptor($descriptor, $getNewInstance = false)
    {

        if(array_key_exists('metadata', $descriptor)) {

            return $this->getByMetadata($descriptor, $getNewInstance);
        }
        if(array_key_exists('_fingerprint', $descriptor)) {
            return $this->getModelInstanceByFingerPrint($descriptor['_fingerprint']);
        }


        throw new DoesNotExist('Can not load entity with provided data');

    }


    public function getByMetadata($descriptor)
    {
        $metadata = $descriptor['metadata'];


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

            return $entity;

            /*
             *
             *
             *

        $values = [];
        if(array_key_exists('values', $descriptor)) {
            $values = $descriptor['values'];
        }



            try {
                if(!empty($values)) {

                    $entityDescriptor = $this->getDescriptor();
                    foreach ($values as $fieldName => $value) {
                        $fieldDescriptor = $entityDescriptor->getFieldByName($fieldName);

                    }


                    die('EXIT '.__FILE__.'@'.__LINE__);


                    $entity->loadBy($values);
                    return $entity;
                }
                else if($getNewInstance) {
                    return $entity;
                }
            }
            catch(DoesNotExist $exception) {
                if($getNewInstance) {
                    return $entity;
                }
            }
            */
        }
    }



}





