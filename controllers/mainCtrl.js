angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', '$state', function ($scope, mainService, $stateParams, $state) {

		

		$scope.skateparks = mainService.getData();

		$scope.state = $stateParams.state;

		$scope.stateParks = mainService.getParks($scope.state);
		console.log('this is what im trying to loop through', $scope.stateParks)

		


	}]);