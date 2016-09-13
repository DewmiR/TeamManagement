myApp.controller('SingleCourseController', ['$scope','$http','$location','$routeParams', function($scope,$http,$location,$routeParams) {
 	
$scope.$parent.body_class = "";
    
$scope.init = function () {
    console.log("Single Called");
    $scope.courseId = $routeParams.id;
    
   
   // $scope.loadCourse();
}

$scope.loadCourse = function () {
    
//    var params = {};
//    $http({
//            method: 'GET',
//            url:'http://localhost:8080/get_courses',
//            params: params
//        }).then(
//                function success(response) {
//                    //console.log(response.data);
//                },
//                function error(error) {
//                    console.log('Failed to load courses');
//                }
//        );
    
};


$scope.init();
}]);