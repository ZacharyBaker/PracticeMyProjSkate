angular.module('skateApp')

.controller('loginCtrl', ['$scope', function($scope){

	

	$scope.dude = function(){
		console.log('heckka pushed');
	};
	
	$scope.changeState = function(mystate){
		//this needs to change the state!
		//u$state.go('')
		console.log(mystate);
	}
	
}])