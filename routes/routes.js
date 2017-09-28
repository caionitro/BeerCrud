module.exports = function(router,Beer){

	router.route('/beers')
		.post(function(req,res){

			var beer = new Beer();
			beer.nome = req.body.nome;
			beer.quantidade = req.body.quantidade;
			beer.valor = req.body.valor;

			beer.save(function(err){
				if (err) {
					res.send(err);
				};
				res.json({message: 'Beer cadastrada!'});
			});
		})
		.get(function(req,res){
			Beer.find(function(err, beers) {
				if (err){
					res.send(err);
				};
				res.json(beers);
			});
		});

	router.route('/beers/:beer_id')
		.get(function(req,res){
			Beer.findById(req.params.beer_id,function(eer,beer){
				if (eer) {
					res.send(eer);
				};
				res.json(beer);
			});
		})
		.put(function(req,res){
			Beer.findById(req.params.beer_id,function(eer,beer){
				if (eer) {
					res.send(eer);
				};

				beer.nome = req.body.nome;
				beer.quantidade = req.body.quantidade;
				beer.valor = req.body.valor;

				beer.save(function(err){
					if (err) {
						res.send(err);
					};
					res.json({message: 'Beer atualizada'});
				});

			});
		}).delete(function(req,res){
			Beer.remove({_id: req.params.beer_id},function(err,beer){
				if (err) {
					res.send(err);
				};
				res.json({message: 'Deletado com sucesso'});
			});
		});
	//hacktoberfest
};
