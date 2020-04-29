var mongoose = require('mongoose');

// Category schema

var TestSchema= mongoose.Schema({

name: {

	type: String,
	required: true
},

number: {

	type: String,
	required: true
	
}





});





var Test = module.exports = mongoose.model('Test', TestSchema);