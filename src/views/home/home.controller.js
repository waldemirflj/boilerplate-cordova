;(function() {
  'use strict';
  
  angular.module('boilerplate')
      .controller('homeController', homeController);

  homeController.$inject = [];

  function homeController() {
    const vmHome = this;
    
    vmHome.welcome = 'Welcome to home page.';
  }
})();