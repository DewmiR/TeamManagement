var lectApp = angular.module('lectApp', ['ngRoute']);

lectApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/lecturer', {
      templateUrl: 'views/courses.html',
      controller: ''
    }).
    otherwise({
      redirectTo: '/lecturer'
    });
}]);
