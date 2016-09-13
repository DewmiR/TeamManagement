'use strict';

var mongoose = require('mongoose');

var EnrollSchema = new mongoose.Schema({
	courseId: String,
	userId: String
});

var Enroll = module.exports = mongoose.model('Enroll',EnrollSchema);


module.exports.createNewEnroll = function(newEnroll, callback){
    newEnroll.save(callback);
}

module.exports.getUsersEnrolledInCourse = function(courseId, callback){
    Enroll.find({courseId: courseId},callback);
}
