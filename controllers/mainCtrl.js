angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', '$firebaseArray', 'stateParks',
		function ($scope, mainService, $stateParams, $firebaseArray, stateParks) {

			$scope.stateParks = stateParks;
			
			$scope.state = $stateParams.state;

			// $scope.stateParks = mainService.getParks($scope.state);

			$scope.addNewPark = function () {
				var newPark = {};
				newPark.name = $scope.newParkName;
				newPark.address = $scope.newParkAddress;
				newPark.state = $scope.newParkState;
				newPark.pic = $scope.newParkImgUrl;
				// mainService.addNewPark($scope.newParkName, $scope.newParkAddress, $scope.newParkState, $scope.newParkImgUrl);
				mainService.addPark(newPark);
				$scope.stateParks = stateParks;
				
				$scope.newParkName = '';
				$scope.newParkAddress = '';
				$scope.newParkState = '';
				$scope.newParkImgUrl = '';

			}

		
		}]);
	