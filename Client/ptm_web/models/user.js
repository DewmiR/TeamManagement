'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String
});

var User = module.exports = mongoose.model('User',UserSchema);


module.exports.getUserByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    if(candidatePassword == hash){
    	callback(null,true);
    }else{
    	callback("not mathing",false);
    }
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}


module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}