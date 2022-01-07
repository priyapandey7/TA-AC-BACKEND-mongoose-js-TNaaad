var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title : { type:String, required :true },
    description :{ type:String,minlength:5 ,maxlength:10 },
    tags : [String],
    author: Schema.Types.ObjectId,
    Comment :[String]
},{ timestamps : true} )

var Article = mongoose.model('Article' , articleSchema);

module.exports = Article;

