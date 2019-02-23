var classes = [
    {
        "name": "Planck\\Application\\Application",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPathManager",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPathManager",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadExtensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadExtension",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStatus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "registerExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensions",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRouteByFingerPrint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildRoute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBeforeInitialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doOnSuccess",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doOnNoResponse",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBeforeRouting",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doAfterRouting",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRenderer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRenderer",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "render",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "run",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 23,
        "nbMethods": 21,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 20,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 44,
        "ccn": 22,
        "ccnMethodMax": 7,
        "externals": [
            "Phi\\Application\\Application",
            "Phi\\Core\\Interfaces\\Renderer",
            "Planck\\Application\\Exception",
            "parent",
            "Planck\\Application\\ExtensionLoader",
            "Planck\\Application\\State\\Execution",
            "Phi\\Core\\VirtualPathManager",
            "parent",
            "Planck\\Application\\Extension",
            "Planck\\Exception\\DoesNotExist",
            "Planck\\Exception\\DoesNotExist",
            "Phi\\Core\\Interfaces\\Renderer",
            "Phi\\Core\\Interfaces\\Renderer",
            "Phi\\Core\\Renderer",
            "Phi\\Routing\\Request",
            "parent"
        ],
        "parents": [
            "Phi\\Application\\Application"
        ],
        "lcom": 5,
        "length": 260,
        "vocabulary": 53,
        "volume": 1489.26,
        "difficulty": 17.07,
        "effort": 25416.69,
        "level": 0.06,
        "bugs": 0.5,
        "time": 1412,
        "intelligentContent": 87.26,
        "number_operators": 68,
        "number_operands": 192,
        "number_operators_unique": 8,
        "number_operands_unique": 45,
        "cloc": 39,
        "loc": 232,
        "lloc": 193,
        "mi": 54.63,
        "mIwoC": 24.97,
        "commentWeight": 29.67,
        "kanDefect": 2.83,
        "relativeStructuralComplexity": 576,
        "relativeDataComplexity": 0.76,
        "relativeSystemComplexity": 576.76,
        "totalStructuralComplexity": 13248,
        "totalDataComplexity": 17.44,
        "totalSystemComplexity": 13265.44,
        "package": "Planck\\Application\\",
        "pageRank": 0.38,
        "afferentCoupling": 6,
        "efferentCoupling": 11,
        "instability": 0.65,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\ApplicationRegistry",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "getInstance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildApplication",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 6,
        "ccn": 5,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Application\\Exception",
            "Planck\\Application",
            "cast"
        ],
        "parents": [],
        "lcom": 2,
        "length": 42,
        "vocabulary": 14,
        "volume": 159.91,
        "difficulty": 7.22,
        "effort": 1154.9,
        "level": 0.14,
        "bugs": 0.05,
        "time": 64,
        "intelligentContent": 22.14,
        "number_operators": 16,
        "number_operands": 26,
        "number_operators_unique": 5,
        "number_operands_unique": 9,
        "cloc": 14,
        "loc": 43,
        "lloc": 29,
        "mi": 90.66,
        "mIwoC": 52,
        "commentWeight": 38.66,
        "kanDefect": 0.43,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4.5,
        "relativeSystemComplexity": 4.5,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 9,
        "totalSystemComplexity": 9,
        "package": "Planck\\Application\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\Extension",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setApplication",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilepath",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAssetsFilepath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptsFilepath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setURLPattern",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadAspects",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadModules",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModules",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModule",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCSS",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCSSRequirements",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptRequirements",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAssets",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensionCSS",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensionJavascript",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 21,
        "nbMethods": 17,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 17,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 1,
        "wmc": 37,
        "ccn": 17,
        "ccnMethodMax": 5,
        "externals": [
            "Planck\\Application\\Application",
            "Planck\\Extension\\FrontVendor\\Package\\Planck",
            "Planck\\Application\\Application",
            "className",
            "Planck\\Application\\Module",
            "Planck\\Exception\\DoesNotExist",
            "Planck\\Helper\\File",
            "Planck\\Helper\\File",
            "Planck\\Helper\\File",
            "Phi\\HTML\\CSSFile",
            "Phi\\HTML\\JavascriptFile"
        ],
        "parents": [],
        "lcom": 3,
        "length": 356,
        "vocabulary": 64,
        "volume": 2136,
        "difficulty": 8.27,
        "effort": 17657.6,
        "level": 0.12,
        "bugs": 0.71,
        "time": 981,
        "intelligentContent": 258.39,
        "number_operators": 108,
        "number_operands": 248,
        "number_operators_unique": 4,
        "number_operands_unique": 60,
        "cloc": 46,
        "loc": 221,
        "lloc": 177,
        "mi": 57.83,
        "mIwoC": 25.36,
        "commentWeight": 32.47,
        "kanDefect": 2.87,
        "relativeStructuralComplexity": 625,
        "relativeDataComplexity": 0.87,
        "relativeSystemComplexity": 625.87,
        "totalStructuralComplexity": 13125,
        "totalDataComplexity": 18.35,
        "totalSystemComplexity": 13143.35,
        "package": "Planck\\Application\\",
        "pageRank": 0.12,
        "afferentCoupling": 2,
        "efferentCoupling": 8,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\ExtensionLoader",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isExtensionLoaded",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Planck\\Application\\Exception",
            "Planck\\Application\\Exception",
            "extensionName"
        ],
        "parents": [],
        "lcom": 2,
        "length": 37,
        "vocabulary": 10,
        "volume": 122.91,
        "difficulty": 8,
        "effort": 983.29,
        "level": 0.13,
        "bugs": 0.04,
        "time": 55,
        "intelligentContent": 15.36,
        "number_operators": 13,
        "number_operands": 24,
        "number_operators_unique": 4,
        "number_operands_unique": 6,
        "cloc": 13,
        "loc": 47,
        "lloc": 34,
        "mi": 87.8,
        "mIwoC": 51.42,
        "commentWeight": 36.38,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.38,
        "relativeSystemComplexity": 3.38,
        "totalStructuralComplexity": 4,
        "totalDataComplexity": 9.5,
        "totalSystemComplexity": 13.5,
        "package": "Planck\\Application\\",
        "pageRank": 0.09,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\Module",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtension",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRoutes",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBaseName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadRouters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRouters",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRouter",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildURL",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 15,
        "ccn": 7,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Application\\Application",
            "Planck\\Application\\Extension",
            "Planck\\Helper\\StringUtil",
            "Planck\\Helper\\StringUtil",
            "routerClassName",
            "Planck\\Exception\\DoesNotExist"
        ],
        "parents": [],
        "lcom": 1,
        "length": 134,
        "vocabulary": 32,
        "volume": 670,
        "difficulty": 8.24,
        "effort": 5521.3,
        "level": 0.12,
        "bugs": 0.22,
        "time": 307,
        "intelligentContent": 81.3,
        "number_operators": 45,
        "number_operands": 89,
        "number_operators_unique": 5,
        "number_operands_unique": 27,
        "cloc": 62,
        "loc": 130,
        "lloc": 69,
        "mi": 83.01,
        "mIwoC": 39.16,
        "commentWeight": 43.86,
        "kanDefect": 1.05,
        "relativeStructuralComplexity": 64,
        "relativeDataComplexity": 1.1,
        "relativeSystemComplexity": 65.1,
        "totalStructuralComplexity": 576,
        "totalDataComplexity": 9.89,
        "totalSystemComplexity": 585.89,
        "package": "Planck\\Application\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 5,
        "instability": 0.83,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\State\\Data",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Planck\\Application\\State",
            "Planck\\Application\\Application",
            "parent"
        ],
        "parents": [
            "Planck\\Application\\State"
        ],
        "lcom": 1,
        "length": 2,
        "vocabulary": 1,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 1,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 2,
        "number_operators_unique": 0,
        "number_operands_unique": 1,
        "cloc": 9,
        "loc": 17,
        "lloc": 8,
        "mi": 216.16,
        "mIwoC": 171,
        "commentWeight": 45.16,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "Planck\\Application\\State\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\State\\Execution",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ok",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "notFound",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "forbidden",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 7,
        "ccn": 4,
        "ccnMethodMax": 2,
        "externals": [
            "Planck\\Application\\State",
            "Planck\\Application\\Application",
            "parent",
            "Planck\\State\\Dimension",
            "Planck\\State\\Dimension",
            "Planck\\State\\Dimension"
        ],
        "parents": [
            "Planck\\Application\\State"
        ],
        "lcom": 2,
        "length": 44,
        "vocabulary": 9,
        "volume": 139.48,
        "difficulty": 8,
        "effort": 1115.81,
        "level": 0.13,
        "bugs": 0.05,
        "time": 62,
        "intelligentContent": 17.43,
        "number_operators": 12,
        "number_operands": 32,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 38,
        "lloc": 38,
        "mi": 49.98,
        "mIwoC": 49.98,
        "commentWeight": 0,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.4,
        "relativeSystemComplexity": 17.4,
        "totalStructuralComplexity": 64,
        "totalDataComplexity": 5.6,
        "totalSystemComplexity": 69.6,
        "package": "Planck\\Application\\State\\",
        "pageRank": 0.09,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\State",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Planck\\State",
            "Planck\\Application\\Application"
        ],
        "parents": [
            "Planck\\State"
        ],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 3,
        "loc": 12,
        "lloc": 9,
        "mi": 108.4,
        "mIwoC": 73.43,
        "commentWeight": 34.97,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 1,
        "relativeSystemComplexity": 1,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 1,
        "totalSystemComplexity": 1,
        "package": "Planck\\Application\\",
        "pageRank": 0.1,
        "afferentCoupling": 2,
        "efferentCoupling": 2,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\Traits\\HasModel",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "setModel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModel",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModelEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModelRepository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModelRepositoryByEntityName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModelInstanceByFingerPrint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getModelInstanceByDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getByMetadata",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 6,
        "ccnMethodMax": 4,
        "externals": [
            "Planck\\Model\\Model",
            "Planck\\Model\\Exception\\DoesNotExist",
            "Planck\\Helper\\StringUtil",
            "Planck\\Model\\Exception\\DoesNotExist"
        ],
        "parents": [],
        "lcom": 1,
        "length": 81,
        "vocabulary": 21,
        "volume": 355.78,
        "difficulty": 6.82,
        "effort": 2427.66,
        "level": 0.15,
        "bugs": 0.12,
        "time": 135,
        "intelligentContent": 52.14,
        "number_operators": 23,
        "number_operands": 58,
        "number_operators_unique": 4,
        "number_operands_unique": 17,
        "cloc": 61,
        "loc": 119,
        "lloc": 58,
        "mi": 87.63,
        "mIwoC": 42.86,
        "commentWeight": 44.77,
        "kanDefect": 0.5,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 1.38,
        "relativeSystemComplexity": 50.38,
        "totalStructuralComplexity": 392,
        "totalDataComplexity": 11,
        "totalSystemComplexity": 403,
        "package": "Planck\\Application\\Traits\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Application\\WebApplication",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getPublicFilepath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getJavascriptFilePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCSSFilePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTheme",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensionsAssets",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensiontJavascripts",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensiontJavascriptRequirements",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensiontCSS",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtensiontCSSRequirements",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 9,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 17,
        "ccn": 9,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Application\\Application"
        ],
        "parents": [
            "Planck\\Application\\Application"
        ],
        "lcom": 5,
        "length": 86,
        "vocabulary": 9,
        "volume": 272.61,
        "difficulty": 15.25,
        "effort": 4157.36,
        "level": 0.07,
        "bugs": 0.09,
        "time": 231,
        "intelligentContent": 17.88,
        "number_operators": 25,
        "number_operands": 61,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 6,
        "loc": 67,
        "lloc": 61,
        "mi": 65.15,
        "mIwoC": 42.79,
        "commentWeight": 22.36,
        "kanDefect": 1.35,
        "relativeStructuralComplexity": 49,
        "relativeDataComplexity": 0.69,
        "relativeSystemComplexity": 49.69,
        "totalStructuralComplexity": 441,
        "totalDataComplexity": 6.25,
        "totalSystemComplexity": 447.25,
        "package": "Planck\\Application\\",
        "pageRank": 0.04,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]