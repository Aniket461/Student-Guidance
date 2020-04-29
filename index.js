const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
var config = require('./config/database');


const Test = require('./models/test');

const Company = require('./models/company');
const Roles = require('./models/roles');
const Sources = require('./models/sources');


const brain = require('brain.js');
const data = require('./data.json');


let loggedIn = 0;

//connect to db

mongoose.connect(config.database, {useNewUrlParser: true});

var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){

console.log('connected to mongo DB');

});



app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Set public folder
app.use(express.static(path.join(__dirname,'public')));


// body parser middleware

app.use(bodyParser.urlencoded({extended: true}));
//parse application/json
app.use(bodyParser.json());


//express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  //cookie: { secure: true }
}));


app.get("/",(req,res)=>{

    res.render('index');
});

app.get("/assess",(req,res)=>{

    res.render('assess1');
});



app.post("/assess",(req,res)=>{


	var array = JSON.parse("["+req.body.arra+"]");
	var spawn = require("child_process").spawn; 

	console.log(array);
      
	var a = [1,2,3,4,5];
  // Parameters passed in spawn - 
  // 1. type_of_script 
  // 2. list containing Path of the script 
  //    and arguments for the script  

  // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
  // so, first name = Mike and last name = Will 
  var process = spawn('python',["./pythonfile.py", 
						  array 
						] ); 

	console.log("between");

  // Takes stdout data from script which executed 
  // with arguments and send this data to res object 
  process.stdout.on('data', function(data) { 
	  res.render('result',{

		role: data.toString()

	  }) ;
  } )
  process.stderr.on('data', function(data) { 
	console.log(data.toString()); 
} )
  
  process.on('error', function(err){

	console.log(err);

  })


});

app.get('/result',(req,res)=>{

res.render('result',{

	role: "Developer"
});

});

app.get('/Developer',(req,res)=>{
	Sources.find({name:'Developer'},function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//1
app.get('/Technical%20Engineer',(req,res)=>{
	Sources.find({ name: "Technical Engineer" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//2
app.get('/Database%20Developer',(req,res)=>{
	Sources.find({ name: "Database Developer" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//3
app.get('/Network%20Engineer',(req,res)=>{
	Sources.find({ name: "Network Engineer" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});


//4
app.get('/Project%20Manager',(req,res)=>{
	Sources.find({ name: "Project Manager" }, function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//5
app.get('/Web%20Developer',(req,res)=>{
	Sources.find({ name: "Web Developer" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//6
app.get('/Software%20Quality%20Assurance%20(QA)%20/%20Testing',(req,res)=>{
	Sources.find({ name: "Software Testing" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});

//7
app.get('/Business%20Analyst',(req,res)=>{
	Sources.find({ name: "Business Analyst" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});


//8
app.get('/Software%20Developer',(req,res)=>{
	Sources.find({ name: "Software Developer" },function(err, company){
		if(err) console.log(err);
		else{
		res.render('sources',{
			sources: company
	
		});
		}
	});
});







app.get('/addroles',(req,res)=>{

res.render('addroles');

});

app.post('/addroles',(req,res)=>{
	console.log(req.body);

const name = req.body.name;
const desc = req.body.desc;

var role = new Roles({


name: name,
description: desc

});

role.save((err)=>{

if(err){
	console.log(err)
}
else{
	console.log("Role Added to Database");
	res.render('index');
}

});



});

app.get('/company',(req,res)=>{

	res.render('company');
	
	});
	
	app.post('/company',(req,res)=>{
		console.log(req.body);
	
	const name = req.body.name;
	const role1 = req.body.role1;
	const role2 = req.body.role2;
	
	
	var company = new Company({
	
	
	name: name,
	role1: role1,
	role2: role2
	
	});
	
	company.save((err)=>{
	
	if(err){
		console.log(err)
	}
	else{
		console.log("Company Added to Database");
		res.render('index');
	}
	
	});
	
	
	
	});


	app.get('/sources', (req,res)=>{

		Sources.find(function(err, source){

			if(err) console.log(err);
		
			else{
		
		
			res.render('sources',{
				sources: source
		
			});
		

	}
});

	});


	app.get('/addsources',(req,res)=>{

		res.render('addsources');
		
	});

	app.post('/addsources',(req,res)=>{
			console.log(req.body);
		
		const name = req.body.name;
		const vid1 = req.body.vid1;
		const vid2 = req.body.vid2;
		const vid3 = req.body.vid3;
		const des1 = req.body.des1;
		const des2 = req.body.des2;
		const des3 = req.body.des3;
		const link1 = req.body.link1;
		const link2 = req.body.link2;
		const link3 = req.body.link3;
		const pd1 = req.body.pd1;
		const pd2 = req.body.pd2;
		const pd3 = req.body.pd3;
		const des4 = req.body.des4;
		const des5 = req.body.des5;
		const des6 = req.body.des6;
		const link4 = req.body.link4;
		const link5 = req.body.link5;
		const link6 = req.body.link6;
		
		const co1 = req.body.co1;
		const co2 = req.body.co2;
		const co3 = req.body.co3;
		const des7 = req.body.des7;
		const des8 = req.body.des8;
		const des9 = req.body.des9;
		const link7 = req.body.link7;
		const link8 = req.body.link8;
		const link9 = req.body.link9;
		
		var source = new Sources({
		
		
		name: name,
		vid1: vid1,
		vid2: vid2,
		vid3: vid3,
		des1:des1,
		des2:des2,
		des3:des3,
		link1: link1,
		link2: link2,
		link3: link3,
		pd1: pd1,
		pd2: pd2,
		pd3:pd3,
		des4:des4,
		des5:des5,
		des6:des6,
		link4: link4,
		link5: link5,
		link6: link6,
		co1:co1,
		co2:co2,
		co3:co3,
		des7:des7,
		des8:des8,
		des9:des9,
		link7: link7,
		link8: link8,
		link9: link9
		});
		
		source.save((err)=>{
		
		if(err){
			console.log(err)
		}
		else{
			console.log("Source Added to Database");
			res.render('index');
		}
		
		});
		
		
		
		});
		
	
app.get('/companydetails',(req,res)=>{

Company.find(function(err, company){

	if(err) console.log(err);

	else{


	res.render('companydetails',{
		company: company

	});


	}


});



});


app.get('/roles',(req,res)=>{

Roles.find(function(err, role){

	if(err) console.log(err);

	else{


	res.render('roles',{
		role:role 

	});


	}


});


});

app.get('/dashboard',(req,res)=>{

if(loggedIn == 1){

	res.render('dashboard');
}

else{
	res.render('login',{

		message: "To access Dashboard Please Log In!!"

	})
}

});


app.get('/login', (req,res)=>{


res.render('login',{

	message: ""
});

});



app.post('/login', (req,res)=>{

console.log(req.body);

const username = req.body.username;
const password = req.body.password;
console.log(`${username} and ${password}`);

if(username == "Admin" && password == "Admin"){
	loggedIn = 1;
	res.render('dashboard');
}
else{
	res.render('login',{

			message: "Wrong Credentials!!"

	});
}


});


const port = 3000 || process.env.PORT;

app.listen(port, ()=>{

    console.log(`App is running on port ${port}`);

});