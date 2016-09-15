var lectApp = angular.module('lectApp', ['ngRoute']);

lectApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/lecturer', {
      templateUrl: 'views/courseEnrolled.html',
      controller: 'courseEnrolled'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);
