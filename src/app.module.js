;(function() {
  'use strict';

  angular
    .module('boilerplate', [
      'ui.router',
      'oc.lazyLoad',
      'ngSanitize',
    ])
    .run(runApp);

    runApp.$inject = [
      '$transitions',
      '$state'
    ];
    
    function runApp($transitions, $state) {
      // put here everything that you need to run on page load
      // ???

      // $transitions.onStart({}, function($transition) {
      //   console.log('onStart');
      //   console.log($transition.$from(), $transition.$to());
      // });
  
      // $transitions.onExit({}, function($transition) {
      //   console.log('onExit');
      // });
  
      // $transitions.onRetain({}, function($transition) {
      //   console.log('onRetain');
      // });
  
      // $transitions.onEnter({}, function($transition) {
      //   console.log('onEnter');
      // });
  
      // $transitions.onFinish({}, function($transition) {
      //   console.log('onFinish');
      // });
  
      // $transitions.onSuccess({}, function($transition) {
      //   console.log('onSuccess');
      // });
    }
})();