myApp.controller('MyfriendsController', ['$scope','$http','$location', function($scope,$http,$location) {
 	
$scope.$parent.body_class = "leftmenu memberprofile";
  	
$scope.init = function () {
    $scope.friends = [];
    $scope.loadFriends();
    
}
    
$scope.loadFriends = function () {
    var params = {};
    $http({
            method: 'GET',
            url:'/getUsersEnrolledInCourse',
            params: params
        }).then(
                function success(response) {
                    //console.log(response.data);
                    Array.prototype.push.apply($scope.friends, response.data);
                    console.log($scope.friends)
		
                },
                function error(error) {
                    console.log('Failed to load courses');
                }
        );
    
}


$scope.init();




}]);