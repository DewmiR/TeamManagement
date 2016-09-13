var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');

var port = process.env.PORT || 2595;

var app = express();

app.use(cookieParser());
app.use(express.static(__dirname + '/app'));



app.use(bodyParser.urlencoded({
    extended: true
}));




// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


app.use(function (req, res, next) {
  res.locals.login = req.isAuthenticated();
  next();
});


//routes
app.get('/', function (req, res) {
   res.sendfile('app/index.html');
});

app.get('/userLogin', function (req, res) {
 
 	console.log("Hello world");
	console.log(req.query.amount);
 	res.send("ss");

    
});


app.listen(port);
console.log('Express server running at http://localhost:' + port);