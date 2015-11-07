angular.module('skateApp')

	.controller('loginCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		$scope.skateparks = mainService.skateparks;



		$scope.changeState = function (mystate) {
			//this needs to change the state!
			//u$state.go('')
			console.log(mystate);
		}
	
	
	
		

	}])