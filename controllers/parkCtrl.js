angular.module('skateApp')

	.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', 'singlePark', function ($scope, mainService, $stateParams, singlePark) {

		$scope.park = $stateParams.park;

		$scope.singlePark = mainService.getSinglePark($scope.park);

		$scope.getParkMessages = function () {
			$scope.parkMessages = mainService.getMessages($scope.singlePark.name);
			return $scope.parkMessages;
		}
		
		$scope.parkMessages = mainService.getMessages($scope.singlePark.name);


		$scope.sendMessageToBackend = function () {
			// console.log('here is message, name, and user', $scope.message, $scope.singlePark.name, $scope.user);
			// mainService.addMessage($scope.message, $scope.singlePark.name, $scope.user);
			// $scope.getParkMessages();
			var newMessage = {};
			newMessage.text = $scope.message;
			newMessage.user = $scope.user;
			mainService.addMessage(newMessage);
			
			
			$scope.message = '';
			$scope.user = '';
		}


	}]);