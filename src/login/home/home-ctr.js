angular.module('sparrowFit')
.controller('homeController', homeController)
//$http, auth, store, $location
function homeController(auth) {
  console.log('hi from profile ctrl')
  this.auth = auth;
  this.testString = 'this is a home message'
}
