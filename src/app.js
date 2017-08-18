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
  })
