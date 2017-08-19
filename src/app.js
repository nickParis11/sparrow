angular // add module dependencies and configure it
  .module('authApp', ['auth0', 'angular-storage', 'angular-jwt', 'ngMaterial', 'ui.router'])
  .config(function($locationProvider, jwtOptionsProvider, $provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {

    authProvider.init({ // for auth0 lock (login)
      domain: 'sparrow-angluarjs.auth0.com',
      clientID: 'NJ9hqwCSD6bSnTQ1PlBNNWmxP4aYRFPC',
      loginUrl: '/#/home'
    });

    $stateProvider
      .state('home', {
        url:'/home',
        templateUrl: 'components/home/home-tpl.html'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'components/profile/profile-tpl.html',
        controller: 'profileController as user'
      })
      // integration from client
      .state('workout', {
        url: '/workout',
        templateUrl: 'client/components/workout-component/workout.html',
        controller: 'WorkoutCtrl'
      })

    jwtOptionsProvider.config({
      tokenGetter: function() {
        return localStorage.getItem('id_token');
      },
      whiteListedDomains: ['localhost', '127.0.0.1'] // whitelist domains
    });


    $urlRouterProvider.otherwise('/home');
    // remove ! from hash /#!/
    $locationProvider.hashPrefix('');
    // have jwt come with all requests to endpoints
    jwtInterceptorProvider.tokenGetter = function(store) {
      // this will go to local storage and return that token and give it to jwtInterceptorProvider to attach as an auth header on our requests

      // we need to push this into an array of http interceptors that comes from angular
      return store.get('id_token');
    }

    // register interceptor which will redirect user to login if token expires
    function redirect($q, $injector, $timeout, store, $location) {
      var auth;
      $timeout(function() {
        auth = $injector.get('auth');
      })
      return {
        responseError: function(rejection) {
          console.log('Failed with', rejection.status, 'status');
          if (rejection.status === 401) {
            auth.signout();
            store.remove('profile');
            store.remove('id_token');
            $location.path('/home'); // send back to homepage
          }
          return $q.reject(rejection); // return a rejection from $q
        }
      }
    };

    // commented this out because of a cicular dependency.
    // let angular know about this interceptor and push onto the array of $http interceptor
    $provide.factory('redirect', redirect);
    $httpProvider.interceptors.push('redirect');

    // here we push jwt to the angulars http interceptor
    $httpProvider.interceptors.push('jwtInterceptor');
  })

  // check if session is still valid, if not direct back to sign in
  .run(function($rootScope, $state, auth, store, jwtHelper, $location) {
    // watch for changes in location
    // fires anytime routing changes or page refreshes
    // will use to check users authentication state
    $rootScope.$on('$locationChangeStart', function() {
      console.log('run ran!');
      // console.log('token expired?', jwtHelper.isTokenExpired(token))
      var token = store.get('id_token');
      if (token) { // if there is a token
        if (!jwtHelper.isTokenExpired(token)) { // if token has not expired
          if (!auth.isAuthenticated) { // if user is not authenticated
            auth.authenticate(store.get('profile'), token); // authenticate user
          }
        }
      } else { // send to home to sign in again
        $location.path('/home');
      }
    })
  })
