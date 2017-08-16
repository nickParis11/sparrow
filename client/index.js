angular.module('sparrow',['ui.router'])
.config(function($stateProvider) {
  var states = [
    {
      name:'createWorkout',
      url:'/goalsWorkout',
      component: 'createWorkout'
    }
  ];
   // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });

});





