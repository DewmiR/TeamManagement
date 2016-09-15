/**
 * Created by DewmiR on 9/15/2016.
 */


lectApp.controller('CourseController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.$parent.body_class = "leftmenu memberprofile";
    $scope.message = "I am from Angular Course Controller";


    $http.post('/getUser').success(
        function(data){
            console.log(data);
        }
    ).error(
        function(error){
            console.log(error)
        }
    );

}]);