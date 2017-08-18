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
      url:'/goals',
      component: 'goals',
      resolve : {
        resolveGoal : function (goalService) {
          var goals=goalService.getAllGoals();
          //console.log( goals);
          return goals;
        }
      }
    },
    {
      name: 'goal',
      url: '/{goalID}',
      parent:'goals',
      component : 'goal',
      resolve : {
        resolveGoalItem : function (goalService,$transition$) {
          var goalDetailAfterUSerClick= goalService.getGoal($transition$.params().goalID);
          console.log('in resolve goal, goalDetailAfterUSerClick = '+JSON.stringify(goalDetailAfterUSerClick));
          return goalDetailAfterUSerClick;
        }
      }
    },
    {
      name :'addGoal',
      url:'/addGoal',
      parent :'goals',
      component : 'addGoal'
    }
  ];
   // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});/*.run(function($http, $uiRouter) {
  var Visualizer = window['ui-router-visualizer'].Visualizer;
  $uiRouter.plugin(Visualizer);
  $http.get('services/fakeJSONgoals.js', { cache: true });
});*/

