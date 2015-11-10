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

				$scope.newParkName = '';
				$scope.newParkAddress = '';
				$scope.newParkState = '';
				$scope.newParkImgUrl = '';

			}

			// $scope.stateParks = function () {
			// 	var fbRoot = 'https://skateapp.firebaseio.com';
			// 	var parksRef = new Firebase(fbRoot + '/parks');
			// 	var parks = $firebaseArray(parksRef);
			// 	return parks.$loaded()
			// 		.then(function (data) {
			// 			console.log(data[0].name);
			// 			return data;
			// 		})
			// };
		}]);
	