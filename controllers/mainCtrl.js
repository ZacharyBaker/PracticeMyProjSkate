angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', '$firebaseArray', 'stateRef', '$firebaseObject',
		function ($scope, mainService, $stateParams, $firebaseArray, stateRef, $firebaseObject) {

			// $scope.stateParks = stateRef;

			// $scope.state = $stateParams.state;

			// $scope.stateParks = mainService.getParks($scope.state);

			// $scope.addNewPark = function () {
			// 	var newPark = $scope.newPark;
			// 	// mainService.addNewPark($scope.newParkName, $scope.newParkAddress, $scope.newParkState, $scope.newParkImgUrl);
			// 	mainService.addPark(newPark);
			// 	$scope.stateParks = stateParks;
			// 	$scope.newPark = {};
			// }
			$scope.thisState = $stateParams.stateID;

			$scope.stateParks = $firebaseArray(stateRef);

			var getStatesName = function () {
				return mainService.getStatesName($scope.thisState);

			}();
			

			
			var stateName = $firebaseObject(getStatesName);
			stateName.$bindTo($scope, 'stateName');

			$scope.addNewPark = function () {
				var newPark = $scope.newPark;
				$scope.stateParks.$add(newPark);
				$scope.newPark = {};
			}
		}]);
	