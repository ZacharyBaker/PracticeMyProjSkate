angular.module('skateApp')

	.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', 'parkRef', '$firebaseArray', '$firebaseObject', 'messageRef',
	 function ($scope, mainService, $stateParams, parkRef, $firebaseArray, $firebaseObject, messageRef) {

		// $scope.park = $stateParams.park;

		// $scope.singlePark = mainService.getSinglePark($scope.park);
		// $scope.singlePark = singlePark;
		// $scope.getParkMessages = function () {
		// 	$scope.parkMessages = mainService.getMessages($scope.singlePark.name);
		// 	return $scope.parkMessages;
		// }
		
		// $scope.parkMessages = mainService.getMessages($scope.singlePark.name);
		
		// $scope.stateID = $stateParams.stateID;
		
		var park = $firebaseObject(parkRef);
		park.$bindTo($scope, 'singlePark');
		
		$scope.parkMessages = $firebaseArray(messageRef);

		$scope.sendMessageToFirebase = function(newMessage){
			$scope.parkMessages.$add(newMessage);
			$scope.newMessage = {};
		}
		
		
		// $scope.stateParks = $firebaseArray(stateRef);

		// $scope.sendMessageToBackend = function () {
		// 	// console.log('here is message, name, and user', $scope.message, $scope.singlePark.name, $scope.user);
		// 	// mainService.addMessage($scope.message, $scope.singlePark.name, $scope.user);
		// 	// $scope.getParkMessages();
		// 	var newMessage = {};
		// 	newMessage.text = $scope.message;
		// 	newMessage.user = $scope.user;
		// 	mainService.addMessage(newMessage);
		// 	console.log('this si the new message we want to add', newMessage);
			
		// 	$scope.message = '';
		// 	$scope.user = '';
		// }


	}]);