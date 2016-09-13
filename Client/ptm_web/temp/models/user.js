var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
    name           : { type: String },
    nic            : { type: String },
    academic_year  : { type: String },
    degree_program : { type: String },
    email          : { type: String, index:true },
    contact        : { type: String },
    team_id        : { type: String },
    password       : { type: String },
    pw             : { type: String }
});

var User = module.exports = mongoose.model('User',UserSchema);


module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.getUserByUsername = function(username, callback){
    var query = {email: username};
    User.findOne(query, callback);
}

module.exports.getUsersByTeam = function(team_id, callback){
   User.find({team_id: team_id}, callback);
}


module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
