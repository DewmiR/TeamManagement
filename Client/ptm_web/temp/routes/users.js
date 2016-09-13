var express = require('express');
var router = express.Router();
var generatePassword = require("password-generator");
var User = require("../models/user");
var Team = require("../models/team");
var nodemailer = require("nodemailer");
var _ = require('underscore-node');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


/* Registration form submit */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',function (req,res) {

    // var db = req.db;
    // var collection = db.get('teams');

    var team_name = req.body.team_name;
    var university = req.body.university;

    var member1_name = req.body.member1_name;
    var member1_nic  = req.body.member1_nic;
    var member1_academic_year = req.body.member1_academic_year;
    var member1_degree_program = req.body.member1_degree_program;
    var member1_email = req.body.member1_email;
    var member1_contact_number =req.body.member1_contact_number;

    var member2_name = req.body.member2_name;
    var member2_nic  = req.body.member2_nic;
    var member2_academic_year = req.body.member2_academic_year;
    var member2_degree_program = req.body.member2_degree_program;
    var member2_email = req.body.member2_email;
    var member2_contact_number =req.body.member2_contact_number;

    var member3_name = req.body.member3_name;
    var member3_nic  = req.body.member3_nic;
    var member3_academic_year = req.body.member3_academic_year;
    var member3_degree_program = req.body.member3_degree_program;
    var member3_email = req.body.member3_email;
    var member3_contact_number =req.body.member3_contact_number;

    var member4_name = req.body.member4_name;
    var member4_nic  = req.body.member4_nic;
    var member4_academic_year = req.body.member4_academic_year;
    var member4_degree_program = req.body.member4_degree_program;
    var member4_email = req.body.member4_email;
    var member4_contact_number =req.body.member4_contact_number;

    var emails = [];
    if(member1_email != null && member1_email != ''){emails.push(member1_email);}
    if(member2_email != null && member2_email != ''){emails.push(member2_email);}
    if(member3_email != null && member3_email != ''){emails.push(member3_email);}
    if(member4_email != null && member4_email != ''){emails.push(member4_email);}

    var pw1 = generatePassword(12, false);
    var pw2 = generatePassword(12, false);
    var pw3 = generatePassword(12, false);
    var pw4 = generatePassword(12, false);

    //validation
    req.checkBody('member1_name','Member 1 name is required!').notEmpty();
    req.checkBody('member2_name','Member 2 name is required!').notEmpty();
    req.checkBody('member3_name','Member 3 name is required!').notEmpty();
    req.checkBody('member4_name','Member 4 name is required!').notEmpty();

    req.checkBody('member1_email','Member 1 email is required!').notEmpty();
    req.checkBody('member2_email','Member 2 email is required!').notEmpty();
    req.checkBody('member3_email','Member 3 email is required!').notEmpty();
    req.checkBody('member4_email','Member 4 email is required!').notEmpty();

    req.checkBody('member1_email','Member 1 email is not valid!').isEmail();
    req.checkBody('member2_email','Member 2 email is not valid!').isEmail();
    req.checkBody('member3_email','Member 3 email is not valid!').isEmail();
    req.checkBody('member4_email','Member 4 email is not valid!').isEmail();

    var errors = req.validationErrors();

    if(errors){
       console.log("Failed!");
       res.render('index', { errors: errors });
    }else{
        var newTeam  = new Team({
            team_name  : team_name,
            university : university,
            user1_name : member1_name,
            user1_email: member1_email,
            user2_name : member2_name,
            user2_email: member2_email,
            user3_name : member3_name,
            user3_email: member3_email,
            user4_name : member4_name,
            user4_email: member4_email
        });
        Team.createTeam(newTeam,function (err,team) {
            var team_id = team._id;
            var newUser1 = new User({
                name : member1_name,
                nic : member1_nic,
                academic_year : member1_academic_year,
                degree_program : member1_degree_program,
                email : member1_email,
                contact : member1_contact_number,
                team_id : team_id,
                password : pw1,
                pw : pw1
            });
            var newUser2 = new User({
                name : member2_name,
                nic : member2_nic,
                academic_year : member2_academic_year,
                degree_program : member2_degree_program,
                email : member2_email,
                contact : member2_contact_number,
                team_id : team_id,
                password : pw2,
                pw : pw2
            });
            var newUser3 = new User({
                name : member3_name,
                nic : member3_nic,
                academic_year : member3_academic_year,
                degree_program : member3_degree_program,
                email : member3_email,
                contact : member3_contact_number,
                team_id : team_id,
                password : pw3,
                pw : pw3
            });
            var newUser4 = new User({
                name : member4_name,
                nic : member4_nic,
                academic_year : member4_academic_year,
                degree_program : member4_degree_program,
                email : member4_email,
                contact : member4_contact_number,
                team_id : team_id,
                password : pw4,
                pw : pw4
            });
            User.createUser(newUser1,function (err,user) {
                if(err) throw err;
            });
            User.createUser(newUser2,function (err,user) {
                if(err) throw err;
            });
            User.createUser(newUser3,function (err,user) {
                if(err) throw err;
            });
            User.createUser(newUser4,function (err,user) {
                if(err) throw err;
            });
            sendMail(member1_email,member1_email,pw1);
            sendMail(member2_email,member2_email,pw2);
            sendMail(member3_email,member3_email,pw3);
            sendMail(member4_email,member4_email,pw4);
            console.log("Team Saved!");
            res.render('index',{ success_massage: 'Successfull Registration! You will get a email shortly.' });
        });
    }

});


router.get('/login', function(req, res, next) {
    res.render('admin_login');
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/users');
});

passport.use(new LocalStrategy(
  function(username, password, done) {
     User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
          return done(null, false, {message: 'Unknown User'});
        }else{ 
            console.log("User found by username.");
        }
        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                console.log("User found with username & password.");
                return done(null, user);
            } else {
                console.log("User found with username, But password is wrong.");
                return done(null, false, {message: 'Invalid password'});
            }
        });
     });
  }
));

passport.serializeUser(function(user, done) {
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

router.post('/login', passport.authenticate('local',
    {   successRedirect:'/',
        failureRedirect:'/users/login',
        failureFlash: true
    }), function(req, res) {
    res.redirect('/');
});


// router.post('/login', passport.authenticate('local',{
//     console.log("Successful");
// }),function(req,res){
//     console.log("Failed");
// });







// router.post('/login', function(req, res){
//     var username = req.body.username;
//     var password = req.body.password;
// }













//Mail function
function sendMail(to,un,pw){

    // create reusable transport method (opens pool of SMTP connections)
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "dulshanrathnayaka1994@gmail.com",
            pass: "xxx"
        }
    });

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: "Pearson Lanka", // sender address
        to: to, // list of receivers
        subject: "Registration Successful", // Subject line
        text: "Welcome", // plaintext body
        html: "<p>Welcome to Registration Program.</p><p>Username: "+un+"<br>Password: "+pw+"</p><p>Thank you for Registering with us!</p>"
    }

    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
        }else{
            console.log("Email sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });

}


module.exports = router;