angular.module('skateApp', ['ui.router', 'firebase'])

	.constant('fb', {
		url: 'https://skateapp.firebaseio.com/'
	})

	.config(function ($urlRouterProvider, $stateProvider) {

		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/loginTmpl.html',
				controller: 'loginCtrl'
			})

			.state('state', {
				url: '/state/:state',
				templateUrl: 'templates/stateTmpl.html',
				controller: 'mainCtrl',
				resolve: {
					stateParks: function ($firebaseArray, $stateParams) {
						var fbRoot = 'https://skateapp.firebaseio.com';
						var parksRef = new Firebase(fbRoot + '/parks');
						var parks = $firebaseArray(parksRef);
						return parks.$loaded()
							.then(function (data) {
								var justStateParks = [];
								for (var i = 0; i < data.length; i++){
									if (data[i].state === $stateParams.state){
										justStateParks.push(data[i]);
									}
								}
								return justStateParks;
							})
					}
				}
			})
			.state('park', {
				url: '/state/:state/:park',
				templateUrl: 'templates/parksTmpl.html',
				controller: 'parkCtrl'
			})



		$urlRouterProvider
			.otherwise('/login');

	})