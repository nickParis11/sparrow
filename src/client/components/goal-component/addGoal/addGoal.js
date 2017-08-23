angular.module('sparrowFit')
.controller('AddGoalCtrl', function(goalService,store) {

  // show user
  this.showCreateGoal=true;

  this.toggleCreateGoal = function () {
    this.showCreateGoal=!this.showCreateGoal;
  }


  // get user ID
  var profile = store.get('profile');
  this.userId = store.get('profile')['user_id'];



  this.insertGoal= function(){

    var CtrlContext=this;

    console.log('context of insertgoal called from web page',this)
    //fetch and create goal to be inserted
    var dynamicGoal = {}
    dynamicGoal.user_id = this.userId // to implement
    dynamicGoal.number = this.number;
    dynamicGoal.timeFrame = this.timeframe;
    dynamicGoal.name = this.name;
    dynamicGoal.emailAlert = this.hasEmailAlert;

    dynamicGoal = JSON.stringify(dynamicGoal);
    console.log('in insertGoal() in AddGoalCtrl = ');
    goalService.addGoal(dynamicGoal,CtrlContext,function(goalInserted,contextPassedByService){

      console.log('insertion of this new goal',goalInserted);
      //this.toggleCreateGoal ()
      console.log('context of anonymous in addGoal in goalService',contextPassedByService)
      contextPassedByService.showCreateGoal=false;
    });
  }

  //this.insertGoal.bind(this);

})
.component('addGoal', {
  controller: 'AddGoalCtrl',
  templateUrl: 'client/components/goal-component/addGoal/addGoal.html'
});

// [
//   {
//     "id":"0",
//     "user_id" : "2",
//     "number":"3",
//     "timeFrame" : "week",
//     "creationDate" : "08-15-2017",
//     "name" : "weekly exercice",
//     "emailAlert" : "false"
//   },
//   {
//     "id" : "0",
//     "user_id" : "1",
//     "number" : "3",
//     "timeFrame" : "week",
//     "creationDate" : "08-15-2017",
//     "name" : "weekly exercice",
//     "emailAlert" : "false"
//   }
// ]


