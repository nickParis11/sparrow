angular.module('sparrow')
.service('httpService', function ($http) {

  this.getData = function (url, callback) {

    $http.get(url)
    .then( function (res) {
      callback(res.data);
    })
    .catch( function (res) {
      console.log('GET Error Occured :', res);
    });

  };

  this.sendData = function (url, data, callback) {

    $http.post(url, data)
    .then( function (res) {
      if(callback){
        callback(res.data);
      }
    })
    .catch( function (res) {
      console.log('POST Error Occured :', res);
    });

  };

});