console.log(' !!!!!!!!******loaded goalList.js')
angular.module('sparrowFit')
.controller('goalListCtrl', function(goalService) {

  this.goalList=[];

  goalService.getAllGoals().then(function(res){
    this.goalList=res;
    console.log('this goalLSit i ngoalList Ctrl',this.goalList);
  })

  /*
  .then(function(res){
      console.log('allGoals in goalService',res.data);
      callBack(res.data)
    });*/

  console.log(' !!!!!!!!******in goalList controller and was passed the service')
  //console.log('in goal controller and goals from the service = ',goalService.getAllGoals())
})
.component('goalList', {
  bindings : { resolveGoalList :'<'},
  controller: 'goalListCtrl',
  templateUrl: 'client/components/goal-component/goallist/goalList.html'
});



