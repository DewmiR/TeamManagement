myApp.controller('ProfileController', ['$scope','$http','$location', function($scope,$http,$location) {
 	
  	$scope.$parent.body_class = "leftmenu memberprofile";


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