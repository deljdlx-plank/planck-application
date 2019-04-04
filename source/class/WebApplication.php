<?php


namespace Planck\Application;

use Planck\View\Theme;

abstract class WebApplication extends ExtendableApplication
{

    /**
     * @var Theme
     */
    protected $theme;


    //public abstract function getPublicFilepath();


    public abstract function getJavascriptFilePath();


    public abstract function getCSSFilePath();


    public abstract function getTheme();




    //=======================================================


    public function getPublicFilepath()
    {
        $defaultDir = realpath($this->getDefinitionFolder().'/../../www');
        if(!$defaultDir || !is_dir($defaultDir)) {
            throw new DoesNotExist('Default Public filepath does not exist ('.$this->getDefinitionFolder().'/../../www'.')');
        }
    }


    //=======================================================

    public function getExtensionsAssets($toObject = true)
    {
        return array_merge(
            $this->getExtensiontJavascripts($toObject),
            $this->getExtensiontCSS($toObject)
        );
    }

    //=======================================================


    public function getExtensiontJavascripts($toObject = true)
    {
        $extensions = $this->getExtensions();
        $assets = [];

        foreach ($extensions as $extension) {
            $extensionAssets = $extension->getJavascripts($toObject);
            if(!empty($extensionAssets)) {
                $assets = array_merge($assets, $extensionAssets);
            }
        }
        return $assets;
    }

    public function getExtensiontJavascriptRequirements($toObject = true)
    {
        $extensions = $this->getExtensions();
        $assets = [];

        foreach ($extensions as $extension) {
            $extensionAssets = $extension->getJavascriptRequirements($toObject);
            if(!empty($extensionAssets)) {
                $assets = array_merge($assets, $extensionAssets);
            }
        }
        return $assets;
    }

    //=======================================================


    public function getExtensiontCSS($toObject = true)
    {
        $extensions = $this->getExtensions();
        $assets = [];

        foreach ($extensions as $extension) {
            $extensionAssets = $extension->getCSS($toObject);
            if(!empty($extensionAssets)) {
                $assets = array_merge($assets, $extensionAssets);
            }
        }
        return $assets;
    }

    public function getExtensiontCSSRequirements($toObject = true)
    {
        $extensions = $this->getExtensions();
        $assets = [];

        foreach ($extensions as $extension) {
            $extensionAssets = $extension->getCSSRequirements($toObject);
            if(!empty($extensionAssets)) {
                $assets = array_merge($assets, $extensionAssets);
            }
        }
        return $assets;
    }

}




