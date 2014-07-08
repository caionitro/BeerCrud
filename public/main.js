var app = angular.module('Beer',['ngRoute','ngResource']);

app.config(function($routeProvider){

	$routeProvider.when('/beers', {
		templateUrl: './views/beer/beersList.html',
		controller: 'BeerController'
	});

	$routeProvider.when('/cadastro', {
		templateUrl: './views/beer/beersCad.html',
		controller: 'BeerController'
	});

	$routeProvider.otherwise({redirectTo:'/'});

});