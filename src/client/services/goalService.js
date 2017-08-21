// goalService.getAllGoals();
//
angular.module('sparrowFit')
.service('goalService',function($http){

  this.getAllGoals= function (callBack){
    var allGoals=$http.get('/api/get/goals')/*.then(function(res){
      console.log('allGoals in goalService',res.data);
      if(callBack){
        callBack(res.data);
      }

    });
    */
   console.log('allGoals in getAllGoals in goalService',allGoals)
   return allGoals;
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
    // call end point here
    $http.post('/post/goals',newGoal);
    callBack(newGoal);
  };
})
