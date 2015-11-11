angular.module('skateApp', ['ui.router', 'firebase'])

// angular.module('skateApp')
// 	.constant('fb', {
// 		url: 'https://skateapp.firebaseio.com/'
// 	})

	.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/loginTmpl.html',
				controller: 'loginCtrl',
				resolve: {
					statesRef: function (mainService) {
						return mainService.getStates();
					}
				}
			})

			.state('state', {
				url: '/parks/:stateID',
				templateUrl: 'templates/stateTmpl.html',
				controller: 'mainCtrl',
				resolve: {
					stateRef: function (mainService, $stateParams) {
						return mainService.getThisStatesParks($stateParams.stateID);
					}
				}
			})

			.state('park', {
				url: '/parks/:stateID/:parkID',
				templateUrl: 'templates/parksTmpl.html',
				controller: 'parkCtrl',
				resolve: {
					parkRef: function (mainService, $stateParams) {
						return mainService.getPark($stateParams.stateID, $stateParams.parkID);
					},
					messageRef: function(mainService, $stateParams){
						return mainService.getMessages($stateParams.parkID);
					}
					
					
				
					
					
					
					
					// stateRef: function (mainService, $stateParams) {
					// 	return mainService.getThisStatesParks($stateParams.stateID);
					// }
				}
				
				// resolve: {
				// 	singlePark: function ($firebaseArray, $stateParams) {
				// 		var fbRoot = 'https://skateapp.firebaseio.com';
				// 		var singleParkRef = new Firebase(fbRoot + '/parks');
				// 		var singleP = $firebaseArray(singleParkRef);
				// 		return singleP.$loaded()
				// 			.then(function (data) {
				// 				for (var i = 0; i < data.length; i++) {
				// 					if (data[i].name === $stateParams.park) {
				// 						var parkobj = data[i];
				// 					}
				// 				}
				// 				return parkobj;
				// 			})
				// 	}
				// }
			})



		$urlRouterProvider
			.otherwise('/login');

	})