console.log(' !!!!!!!!******loaded goalList.js')
angular.module('sparrowFit')
.controller('goalListCtrl', function(goalService) {
  console.log(' !!!!!!!!******in goalList controller and was passed the service')
  //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
})
.component('goalList', {
  bindings : { resolveGoalList :'<'},
  controller: 'goalListCtrl',
  templateUrl: 'client/components/goal-component/goallist/goalList.html'
});