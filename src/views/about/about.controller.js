;(function() {
  'use strict';
  
  angular.module('boilerplate')
      .controller('aboutController', aboutController);

  aboutController.$inject = [];

  function aboutController() {
    const vmAbout = this;
    
    vmAbout.welcome = 'Welcome to about page.';
  }
})();