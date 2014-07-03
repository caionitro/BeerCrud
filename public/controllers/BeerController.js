app.controller('BeerController',function($scope){
	$scope.total = 0;

	$scope.beers = [
		{nome: 'Skol', quantidade: 12, valor: 20.00},
		{nome: 'Brahma', quantidade: 12, valor: 22.00},
		{nome: 'Budweiser', quantidade: 12, valor: 25.00}
	];


	$scope.incrementar = function(){
		$scope.total++;
	}
});