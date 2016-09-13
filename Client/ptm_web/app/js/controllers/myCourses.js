myApp.controller('MyCoursesController', ['$scope','$http','$location', function($scope,$http,$location) {
 	
$scope.$parent.body_class = "leftmenu memberprofile";
  	
$scope.init = function () {
    $scope.courses = [];
    $scope.loadCourses();
    
}
    
$scope.loadCourses = function () {
    var params = {};
    $http({
            method: 'GET',
            url:'http://localhost:8080/get_courses',
            params: params
        }).then(
                function success(response) {
                    //console.log(response.data);
                    Array.prototype.push.apply($scope.courses, response.data);
                    console.log($scope.courses)
		
                },
                function error(error) {
                    console.log('Failed to load courses');
                }
        );
    
}


$scope.init();
  	

}]);