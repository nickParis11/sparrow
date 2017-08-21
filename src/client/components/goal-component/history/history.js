

console.log(' !!!!!!!!******loaded history.js')
angular.module('sparrowFit')
.controller('historyCtrl', function(goalService) {
  console.log(' !!!!!!!!******in history controller and was passed the service')
  //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
})
.component('history', {
  bindings : { resolveHistory :'<'},
  controller: 'historyCtrl',
  templateUrl: 'client/components/goal-component/history/history.html'
});