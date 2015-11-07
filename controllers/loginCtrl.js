angular.module('skateApp')

	.controller('loginCtrl', ['$scope', 'mainService', '$stateParams', function ($scope, mainService, $stateParams) {

		$scope.skateparks = mainService.skateparks;



		$scope.changeState = function (mystate) {
			//this needs to change the state!
			//u$state.go('')
			console.log(mystate);
		}
	
	
	
		//getting skateparks specified by state
		$scope.getParks = function (stat) {

			$scope.stateParks = [];
			
			for (var i = 0; i < $scope.skateparks.length; i++){
				if ($scope.skateparks[i].state === stat){
					$scope.stateParks.push($scope.skateparks[i]);
				}
			}
			
			
			console.log('this is state parks', $scope.stateParks)
			return $scope.stateParks;
		}

	}])