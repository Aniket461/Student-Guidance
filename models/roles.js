var mongoose = require('mongoose');

// Category schema

var RolesSchema= mongoose.Schema({

name: {
	type: String,
	required: true
},
description: {
	type:String,
	required:true
}
});


var Roles = module.exports = mongoose.model('Roles', RolesSchema);