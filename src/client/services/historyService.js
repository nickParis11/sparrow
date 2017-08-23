angular.module('sparrowFit')
.service('historyService',function($http){

  this.getAllHistory=function(){
    return $http.get('/api/get/histories').then(function(res) {
       console.log(' history list ',res.data)
        return res.data;
      });;
  }

  getAllPeople: function() {
      return $http.get('data/people.json', { cache: true }).then(function(resp) {
        return resp.data;
      });
    }

}