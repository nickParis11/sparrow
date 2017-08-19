angular.module('sparrow')
.controller('AddGoalCtrl', function(goalService) {
  console.log('goalService', goalService)
  this.insertGoal= function(){
    // alert('name = ',this.name)
    // alert('input = ',this.input)
    console.log('input = ',this.input)
    console.log('name = ',this.name)

    //fetch and create goal to be inserted
    var dynamicGoal = {}
    dynamicGoal.name = this.name;
    dynamicGoal.timeframe = this.timeframe;
    dynamicGoal.number = this.number;
    dynamicGoal.hasEmailAlert = this.hasEmailAlert;
    dynamicGoal.startDate='!!!temporary fake messge!!!';
    dynamicGoal.endDate='!!!temporary fake messge!!!';
    dynamicGoal.startDate='!!!temporary fake messge!!!';
    dynamicGoal.completionRate=0;
    dynamicGoal.workoutPace = 0;
    dynamicGoal.workoutPosition ='ahead of',
    dynamicGoal.MotivationPhrase='Take your first workout now !',
    dynamicGoal = JSON.stringify(dynamicGoal);
    console.log('goalService in AddGoalCtrl = ',goalService);
    goalService.addGoal(dynamicGoal,function(){return;}); // implement a proper callBAck when real datas
  }
})
.component('addGoal', {
  controller: 'AddGoalCtrl',
  templateUrl: 'client/components/goal-component/addGoal/addGoal.html'
});

/*
{id:0,
  number:3,
  timeFrame : 'week',
  startDate:'08-15-2017',// Nich H do you think this date format can be easily retrieved from the db ?
  endDate : '11-15-2017', // Nich H do you think this date format can be easily retrieved from the db ?
  name : ' weekly exercice',
  alertByEmail : false,
  completionRate : 8,
  workoutPace : 17,
  workoutPosition : 'behind',
  MotivationPhrase:"you should move this ass while it still can get up of that chair"
}
*/
