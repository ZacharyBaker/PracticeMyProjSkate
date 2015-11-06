angular.module('skateApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){
	
	$stateProvider
		.state('login', {
			url: '/login',
			templateUrl: 'templates/loginTmpl.html',
			controller: 'loginCtrl'
		})
		
		.state('main', {
			url: '/main',
			templateUrl: 'template/mainTmpl.html'
		})
		
		
		
		
	$urlRouterProvider
		.otherwise('/login');
	
})