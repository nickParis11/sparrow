angular.module('sparrow')
// .controller('GoalCtrl', function(goalService) {
//   //console.log('in goal controller and was passed the service')
//   //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
// })
.component('goal', {
  bindings : { resolveGoalItem :'<'}, //goal
  //controller: 'GoalCtrl',
  templateUrl: 'templates/goal.html'
});