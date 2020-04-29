var mongoose = require('mongoose');

// Category schema

var CompanySchema= mongoose.Schema({

name: {
	type: String,
	required: true
},
role1: {
	type:String,
	required:true
},

role2: {
	type:String,
	required: true
}
});


var Company = module.exports = mongoose.model('Company', CompanySchema);