// goalService.getAllGoals();
//
angular.module('sparrow').
service('goalService',function($http){

  this.getAllGoals= function (){
   return fakeJSON_goals;
  }
  this.getGoal=function(goalID){
    //console.log('in goalService goalID = ',goalID);
    function goalMatchesParam(goal){
      //console.log('in goalMatchesParam')
      //console.log('in goalMatchesParam, goal = ',goal.id)
      //console.log('in goalMatchesParam, goalID = ',goalID)
      return goal.id === Number(goalID);
    }
    // var requestedGoal= this.getAllGoals()
    // .filter(function(goal){
    //   return goalMatchesParam(goal)
    // }).join('');

    var requestedGoal= this.getAllGoals()
    .find(goalMatchesParam)


    //console.log(requestedGoal.name);
    return requestedGoal
  }

})