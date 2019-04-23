;(function() {
  'use strict';

  angular.module('boilerplate')
    .config(config);

    config.$inject = [
    'CONSTANTS',
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
  ];

  function config(CONSTANTS, $stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: CONSTANTS.base + 'views/home/index.html',
        controller: 'homeController',
        controllerAs: 'vmHome',
        resolve: {
          loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([CONSTANTS.base + 'views/home/home.controller.js']);
          }]
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: CONSTANTS.base + 'views/about/index.html',
        controller: 'aboutController',
        controllerAs: 'vmAbout',
        resolve: {
          loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([CONSTANTS.base + 'views/about/about.controller.js']);
          }]
        }
      });
      
    $urlRouterProvider.otherwise('/home');
    $locationProvider.hashPrefix('');
  }
})();