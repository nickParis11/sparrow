angular.module('sparrowFit')
  .controller('profileController', profileController)

function profileController($http, store, $location) {
  console.log('hi from profile ctrl')
  var vm = this;
  vm.getMessage = getMessage; // goes to public end point and gets public message
  vm.getSecretMessage = getSecretMessage;
  vm.message; // will hold our messages

  vm.profile = store.get('profile'); // profile will give us access to users nickname, email and profile photo so we can use that in our template.

  function getMessage() {
    console.log('getMessage clicked');
    $http
    .get('http://localhost:3002/api/public', { skipAuthorization: true })
    .then(function(response) {
      vm.message = response.data.message;
    })
    .catch(function(error) {
      console.error('error from getMessage:', error)
    });
  }

  function getSecretMessage() {
    console.log('getSecretMessage clicked', { skipAuthorization: false });
    $http
      .get('http://localhost:3002/api/private')
      .then(function(response) {
        console.log('then response:', response)
        vm.message = response.data.message;
      })
      .catch(function(error) {
        console.error('error from getSecretMessage:', error)
      });
  }
}
