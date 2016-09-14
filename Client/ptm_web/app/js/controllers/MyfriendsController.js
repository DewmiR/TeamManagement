myApp.controller('MyfriendsController', ['$scope','$http','$location', '$routeParams', function($scope,$http,$location,$routeParams) {
 	
$scope.$parent.body_class = "leftmenu memberprofile";
  	
$scope.init = function () {
    $scope.friends = [];
    $scope.loadFriends();
}
    
$scope.loadFriends = function () {
    
    $http.post('/getUsersEnrolledInCourse', {
        cid: $routeParams.cid 
    }).success(
        function(data){
            Array.prototype.push.apply($scope.friends, data);
            console.log($scope.friends)
        }
    ).error(
        function(error){
          console.log(error)
        }
    );
    
}


$scope.init();




}]);