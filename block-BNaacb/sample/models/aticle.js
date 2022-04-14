var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String
})