angular.module('skateApp')

	.controller('loginCtrl', ['$scope', 'mainService', '$stateParams', '$state', 'statesRef', '$firebaseArray',
		function ($scope, mainService, $stateParams, $state, statesRef, $firebaseArray) {

			// $scope.states = mainService.getStates();
			// // console.log(mainService.getStates())
			// // $scope.skateparks = mainService.getData();
			// console.log('this is scope.states', $scope.states);


			// $scope.state = $stateParams.state;

			$scope.states = $firebaseArray(statesRef);
			console.log($scope.states);
			//changing the state
			$scope.changeState = function (stat) {
				$state.go('state', {
					stateID: stat
				});
				// console.log(stat);
			}

			$scope.addState = function(state) {
				// console.log("adding a state");
				$scope.states.$add(state);

			}



		}])