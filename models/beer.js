
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
	nome: {type: String, required: true, trim: true},
	quantidade: Number,
	valor : Number
});


module.exports = mongoose.model('Beer', BeerSchema);
