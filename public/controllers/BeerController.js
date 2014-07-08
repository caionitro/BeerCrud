app.controller('BeerController',function($scope,$http,$resource,$location){

	$scope.beers = [];

	var resource = $resource('http://localhost:8080/api/beers/:id');

	function listaBeers(){
		resource.query(function(retorno){
			$scope.beers = retorno;
		});
	}

	listaBeers();

	$scope.removeBeer = function(beer){
		console.log(beer);
		resource.delete({id: beer._id}, function(status){
			listaBeers();
		});
	}

	$scope.cadastrar = function(b){
		resource.save(b,function(){
			$location.path('/beers');
		});
	}

});