myApp.controller('LoginController', ['$scope','$http','$location', function($scope,$http,$location) {

    $scope.$parent.body_class = "";


  	$scope.login = function(email,password) {
    	console.log(email +"  "+password);

      $http.post('/login', {
        username: email,
        password: password
      }).success(
        function(data){
          if(data == "pass"){
            $location.url('/course');            
          }else{
            $location.url('#/home');
          }
        }
      ).error(
        function(error){
          console.log(error)
        }
      );

    }


}]);