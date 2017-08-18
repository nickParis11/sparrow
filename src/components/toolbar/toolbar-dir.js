angular.module('authApp')
  .component('toolbar', {
    controller: 'toolbarController',
    templateUrl: 'components/toolbar/toolbar-tpl.html',
    controllerAs: 'toolbar'
  })
  .controller('toolbarController', toolbarController);


function toolbarController(auth, store, $location, $http) {
  var vm = this;
  vm.login = login;
  vm.logout = logout;
  vm.goToApplication = goToApplication;
  vm.auth = auth; // auth service will hold useful info
  // such as user is logged in
  function goToApplication() {
    console.log('$http',$http);
    console.log('Application Entered');
    $http.get('http://localhost:3002/api/get/application').then(function(){
      console.log('This thing worked');
    });
  };

  function login() {
    console.log('login clicked');
    //send request to auth0 servers
    auth.signin({}, function(profile, token) {
      // if everything checks out it will set user profile and token into local storage.
      store.set('profile', profile);
      store.set('id_token', token); // token is jwt
      $location.path('/home'); // will send user to home if passes all conditions
    }, function(error) {
      console.log('error from login', error);
    })
  }
  // logging out comes down to removing those tokens from local storage
  function logout() {
    // should set lifetime of token for security
    store.remove('profile');
    store.remove('id_token');
    // auth service gives you a signout method
    // it clears the state from the auth service and reset the user authentication back to false
    auth.signout();
    $location.path('/home') // redirect user back to home route
  }
}
