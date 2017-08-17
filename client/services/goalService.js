// goalService.getAllGoals();
//
angular.module('sparrow').
service('goalService',function($http){

  this.getAllGoals= function (){
   return fakeJSON_goals;
  }
  this.getGoal=function(goalID){

    function goalMatchesParam(goal){
      return goal.id === Number(goalID);
    }
    // var requestedGoal= this.getAllGoals()
    // .filter(function(goal){
    //   return goalMatchesParam(goal)
    // }).join('');

    var requestedGoal= this.getAllGoals()
    .find(goalMatchesParam)

    return requestedGoal
  }

  this.addGoal=function(newGoal,callBack){
    alert('in addGoal');
    fakeJSON_goals.push(newGoal);
    callBack();
  };

})
