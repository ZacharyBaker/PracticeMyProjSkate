angular.module('skateApp')

.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', function($scope, mainService, $stateParams){
	
	$scope.park = $stateParams.park;
	
	
	// play with the service now!!! with the $scope.park
	
}]);