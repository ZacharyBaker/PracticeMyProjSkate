angular.module('skateApp')

.controller('parkCtrl', ['$scope', 'mainService', '$stateParams', function($scope, mainService, $stateParams){
	
	$scope.park = $stateParams.park;
	
	
	
	
}]);