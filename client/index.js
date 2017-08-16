angular.module('sparrow',['ui.router'])
.config(function($stateProvider) {
  var states = [
    {
      name: 'createWorkout',
      url: '/createWorkout',
      component: 'createWorkout'
    },
    {
      name: 'createWorkout.timed',
      url: '/timed',
      component: 'timed'
    },
    {
      name: 'createWorkout.untimed',
      url: '/untimed',
      component: 'untimed'
    },
    {
      name: 'workout',
      url: '/workout',
      component: 'workout'
    },
    {
      name:'goals',
      url: '/goals',
      component: 'goals'
    }
  ];
   // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});





