'use strict';

module.exports =
angular.module('expressly', [
    'ui.router',
    'ngRoute',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'pascalprecht.translate',

        // html templates in $templateCache
        require('../../../tmp/templates').name,

        // common directives, filters, services
        require('../common').name,

        // modules
        require('./myapp').name
        ])
.config(/*@ngInject*/ function ($translateProvider) {
    $translateProvider.preferredLanguage('en');
})
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/myapp/templates/home.html',
        controller: 'homeController'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/myapp/templates/about.html',
        controller: 'aboutController'
    });
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'app/myapp/templates/contact.html'
    });
    $stateProvider.state('services', {
        url: '/services/:id',
        templateUrl: 'app/myapp/templates/services.html',
        controller: 'serviceController',
        resolve: {
            view: function($stateParams){
                if(!$stateParams.id){
                 console.log("Id not found");
                 return 'viewOne';
             }
             return $stateParams.id;
         }
     }
 });

    $stateProvider.state('news', {
        url: '/news',
        templateUrl: 'app/myapp/templates/news.html',
        controller: 'newsController'
    });

    $stateProvider.state('scs', {
        url: '/scs',
        templateUrl: 'app/myapp/templates/scs.html',
        controller: 'scsController'
    });

    $stateProvider.state('dubai-gov', {
        url: '/dubai-gov',
        templateUrl: 'app/myapp/templates/dubai-gov.html',
    });

    $stateProvider.state('dx', {
        url: '/dx',
        templateUrl: 'app/myapp/templates/dx.html',
    });

    $stateProvider.state('atlantis', {
        url: '/atlantis',
        templateUrl: 'app/myapp/templates/atlantis.html',
    });

    $stateProvider.state('see', {
        url: '/see',
        templateUrl: 'app/myapp/templates/see.html',
        controller: 'seeController'
    });

    $stateProvider.state('dhl', {
        url: '/dhl',
        templateUrl: 'app/myapp/templates/dhl.html',
    });

    $stateProvider.state('dnata', {
        url: '/dnata',
        templateUrl: 'app/myapp/templates/dnata.html',
    });

    $stateProvider.state('bat', {
        url: '/bat',
        templateUrl: 'app/myapp/templates/bat.html',
    });

    $stateProvider.state('havi', {
        url: '/havi',
        templateUrl: 'app/myapp/templates/havi.html',
    });

    $stateProvider.state('tfe', {
        url: '/tfe',
        templateUrl: 'app/myapp/templates/tfe.html',
        controller: 'tfeController'
    });

    $stateProvider.state('deutche', {
        url: '/deutche',
        templateUrl: 'app/myapp/templates/deutche.html',
    });

    $stateProvider.state('dhl-express', {
        url: '/dhl-express',
        templateUrl: 'app/myapp/templates/dhl-express.html',
    });
    $stateProvider.state('gallery', {
        url: '/gallery',
        templateUrl: 'app/myapp/templates/gallery.html',
    });


    $urlRouterProvider.otherwise('/home');

    // $stateProvider

    //     // HOME STATES AND NESTED VIEWS ========================================
    //     .state('home', {
    //         url: '/home',
    //         templateUrl: 'partial-home.html'
    //     })

    //     // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    //     .state('about', {
    //         // we'll get to this in a bit       
    //     });

    // .when('/home', {
    //     templateUrl: 'app/myapp/templates/home.html',
    //     controller: 'homeController'
    // })
    // .when('/about', {
    //     templateUrl: 'app/myapp/templates/about.html'
    // })
    // .when('/contact', {
    //     templateUrl: 'app/myapp/templates/contact.html'
    // })
    // .when('/services', {
    //     templateUrl: 'app/myapp/templates/services.html',
    //     controller: 'serviceController'
    // })
    // .when('/news', {
    //     templateUrl: 'app/myapp/templates/news.html',
    // })
    // .when('/cases', {
    //     templateUrl: 'app/myapp/templates/cases.html',
    // })
    // .when('/scs', {
    //     templateUrl: 'app/myapp/templates/dubai-gov.html',
    // })
    // .when('/dubai-gov', {
    //     templateUrl: 'app/myapp/templates/dubai-gov.html',
    // })
    // .when('/dx', {
    //     templateUrl: 'app/myapp/templates/dx.html',
    // })
    // .when('/atlantis', {
    //     templateUrl: 'app/myapp/templates/atlantis.html',
    // })
    // .when('/see', {
    //     templateUrl: 'app/myapp/templates/see.html',
    // })
    // .when('/dhl', {
    //     templateUrl: 'app/myapp/templates/dhl.html',
    // })
    // .when('/dnata', {
    //     templateUrl: 'app/myapp/templates/dnata.html',
    // })
    // .when('/bat', {
    //     templateUrl: 'app/myapp/templates/bat.html',
    // })
    // .when('/havi', {
    //     templateUrl: 'app/myapp/templates/havi.html',
    // })
    // .when('/deutche', {
    //     templateUrl: 'app/myapp/templates/deutche.html',
    // })
    // .when('/dhl-express', {
    //     templateUrl: 'app/myapp/templates/dhl-express.html',
    // })
    // .when('/tfe', {
    //     templateUrl: 'app/myapp/templates/tfe.html',
    // })
    // .otherwise({
    //     redirectTo: '/home'
    // });        
});
// .run(function($rootScope){
//      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
//         //globalFunction();
//     });
// });
