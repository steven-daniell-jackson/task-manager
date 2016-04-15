angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
     redirectTo: '/home'
  })
  .when('/home', {
    templateUrl: 'app/views/home.html',
    controller: 'mainCtrl',
  })
  
  .otherwise({
        redirectTo: '/home'
   });

 
});
