var mongoose = require('mongoose');

var schema = mongoose.schema;

var article = new schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String
})