var routerApp = angular.module("routingApp",['ngRoute']);

routerApp.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:"views/home.html"
		})
		.when('/directory',{
			templateUrl:"views/about.html"
		})
		.otherwise({
			redirectTo:"/home"
		});
})