angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		
		$scope.state = $stateParams.state;

		$scope.stateParks = mainService.getParks($scope.state);


		


	}]);