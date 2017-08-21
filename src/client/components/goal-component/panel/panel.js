console.log(' !!!!!!!!******loaded panel.js')
angular.module('sparrowFit')
.controller('panelCtrl', function(goalService) {
  console.log(' !!!!!!!!******in panel controller and was passed the service')
  //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
})
.component('panel', {
  bindings : { resolvePanel :'<'},
  controller: 'panelCtrl',
  templateUrl: 'client/components/goal-component/panel/panel.html'
});

