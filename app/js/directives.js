angular.module('app.directives', [])

.directive('navbar', function() {
  return {
    templateUrl: 'app/views/partials/navbar.html'
  };
})

.directive('home', function() {
  return {
    templateUrl: 'app/views/home.html'
  };
});
