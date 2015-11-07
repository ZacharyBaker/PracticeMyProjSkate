angular.module('skateApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
	
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'templates/loginTmpl.html',
			controller: 'mainCtrl'
		})
		
		.state('state', {
			url: '/state/:state',
			templateUrl: 'templates/stateTmpl.html',
			controller: 'mainCtrl'
		})
		
		
		
		
	$urlRouterProvider
		.otherwise('/login');
	
})