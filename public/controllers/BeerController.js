app.controller('BeerController',function($scope,$http,$resource,$location,$routeParams){

	$scope.beers = [];
	$scope.botaoSubmit = 'Cadastrar';

	var resource = $resource('http://localhost:8080/api/beers/:id', {}, {
		update: { method: 'PUT' }
	});

	function listaBeers(){
		resource.query(function(retorno){
			$scope.beers = retorno;
		});
	}

	listaBeers();

	$scope.removeBeer = function(beer){
		resource.delete({id: beer._id}, function(status){
			listaBeers();
		});
	}

	$scope.cadastrar = function(beer){
		if (beer._id != undefined) {
			resource.update({id:beer._id},beer,function(){
				$location.path('/beers');
			});
		}else{
			resource.save(beer,function(){
				$location.path('/beers');
			});
		};
	}

	$scope.alterBeer = function(beer){
		$location.path('/cadastro/' + beer._id);
	}

	$scope.loadBeer = function(){
		var _id = $routeParams.id;

		if( _id == undefined ){
			return false;
		}else{
			$scope.botaoSubmit = 'Alterar';
			resource.get({id:_id},function(retorno){
				$scope.beer = retorno;
			});
		}
	}

});