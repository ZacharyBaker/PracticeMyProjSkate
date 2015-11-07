angular.module('skateApp')

	.controller('mainCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		$scope.dude = function () {
			console.log('the button can indeed fire two juggas with one click. biotch')
		}

		$scope.skateparks = mainService.skateparks;

		$scope.state = $stateParams.state;


		// $scope.wrapperFunc = function (stat) {
			
			//changing the state
			$scope.changeState = function (stat) {
				//this needs to change the state!
				$state.go('state', {})
				console.log(stat);
			}
	
	
			//getting skateparks specified by state
			$scope.getParks = function (stat) {

				$scope.stateParks = [];

				for (var i = 0; i < $scope.skateparks.length; i++) {
					if ($scope.skateparks[i].state === stat) {
						$scope.stateParks.push($scope.skateparks[i]);
					}
				}


				console.log('this is state parks', $scope.stateParks)
				return $scope.stateParks;
			}
		// }

	}]);