angular.module('skateApp')

.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', function($scope, mainService, $stateParams){
	
	$scope.park = $stateParams.park;
	
	$scope.singlePark = mainService.getSinglePark($scope.park);
	
	$scope.messages = mainService.getMessages();
	
	$scope.sendMessageToService = function(){
		mainService.addMessage($scope.message, $scope.singlePark.name, $scope.user);
		$scope.message = '';
		$scope.user = '';
	}

	
}]);