'use strict';
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var User = require("./models/user");
mongoose.connect("mongodb://localhost:27017/ptm_db");


/*************************
     Configurations
*************************/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});
app.use(express.static("./app"));
app.use(cors());
app.use(cookieParser());    
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  	function(username, password, done) {


     	User.getUserByUsername(username, function(err, user){
	        
	        if(err) throw err;
	        
	        if(!user){
	        	console.log("User not found...");
	          	return done(null, false, {message: 'Unknown User'});
	        }else{ 


	            console.log("User found by username...");
	            return done(null, user);
	        }

	        // User.comparePassword(password, user.password, function(err, isMatch){

	        //     if(err) throw err;
	        
	        //     if(isMatch){
	        //         console.log("User found with username & password.");
	        //         return done(null, user);
	        //     } else {
	        //         console.log("User found with username, But password is wrong.");
	        //         return done(null, false, {message: 'Invalid password'});
	        //     }

	        // });
     	});
  	}
));

passport.serializeUser(function(user, done) {
    console.log("serializeUser called");
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	console.log("deserializeUser called");
    User.getUserById(id, function(err, user) {
    	//console.log(user);
        done(err, user);
    });
});



/*************************
        Routes
*************************/

app.get('/', function (req, res) {
   res.sendfile('app/index.html');
});

app.post("/getUser",function(req,res){
    res.send(req.user);
});

app.post('/login', passport.authenticate('local',
    {   
    	successRedirect:'/pass',
        failureRedirect:'/fail'
    }), function(req, res) {
    res.redirect('/as');
});


app.get('/pass', function (req, res) {
   res.send("pass");
});





// app.post('/login', function (req, res) {

// 	var newUser = new User({
//         username : req.body.username,
//         password : req.body.password
//     });

// 	User.createUser(newUser,function (err,user) {
//     	if(err) throw err;
// 	});

// });











/*************************
        Server
*************************/

app.listen(3000);
console.log("Express app running on port 3000");
module.exports = app;