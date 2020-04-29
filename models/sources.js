var mongoose = require('mongoose');

// Category schema

var SourceSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
vid1: {
	type: String,
	required: true
},
des1:{
	type: String,
	required: true
},
link1:{
	type:String,
	required:true
},
vid2: {
	type: String,
	required: true
},
des2:{
	type: String,
	required: true
},
link2:{
	type:String,
	required:true
},
vid3: {
	type: String,
	required: true
},
des3:{
	type: String,
	required: true
},
link3:{
	type:String,
	required:true
},
pd1: {
	type: String,
	required: true
},
des4:{
	type: String,
	required: true
},
link4:{
	type:String,
	required:true
},
pd2: {
	type: String,
	required: true
},
des5:{
	type: String,
	required: true
},
link5:{
	type:String,
	required:true
},
pd3: {
	type: String,
	required: true
},
des6:{
	type: String,
	required: true
},
link6:{
	type:String,
	required:true
},
co1: {
	type: String,
	required: true
},
des7:{
	type: String,
	required: true
},
link7:{
	type:String,
	required:true
},
co2: {
	type: String,
	required: true
},
des8:{
	type: String,
	required: true
},
link8:{
	type:String,
	required:true
},
co3: {
	type: String,
	required: true
},
des9:{
	type: String,
	required: true
},
link9:{
	type:String,
	required:true
}
});


var Source = module.exports = mongoose.model('Source', SourceSchema);