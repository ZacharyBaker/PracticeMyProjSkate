angular.module('skateApp')

.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', function($scope, mainService, $stateParams){
	
	$scope.park = $stateParams.park;
	
	
	// play with the service now!!! with the $scope.park
	// in order to get the data for the park that was clicked on because the change in url/controllers 
	// flushed all the data so you need to get it in order to display it
	
}]);