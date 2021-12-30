var mongoose = require('mongoose');

var schema = mongoose.schema;

var articleSchema = new schema({
    title: String,
    discription:String
})

module.exports = mongoose.model('Article', articleSchema);
