angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		
		$scope.state = $stateParams.state;

		$scope.stateParks = mainService.getParks($scope.state);
		console.log('this is what im trying to loop through', $scope.stateParks)

		


	}]);