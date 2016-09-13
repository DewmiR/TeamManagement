'use strict';

var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
	courseName: String,
	image: String
});

var Course = module.exports = mongoose.model('Course',CourseSchema);


module.exports.createCourse = function(newCourse, callback){
    newCourse.save(callback);
}

module.exports.getAllCourses = function(callback){
    Course.find({},callback);
}