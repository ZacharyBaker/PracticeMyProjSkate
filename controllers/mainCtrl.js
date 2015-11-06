angular.module('skateApp')

.controller('mainCtrl', function($scope, mainService, $stateParams){
	
	
	
	$scope.skateparks = mainService.skateparks;
		
	$scope.state = $stateParams.state;
	
	$scope.getParks = function(state){
		//go through the array of parks and get the ones with this specific state
	}
	
	
})