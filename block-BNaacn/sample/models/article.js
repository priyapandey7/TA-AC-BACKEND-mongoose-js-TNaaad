var mongoose = require('mongoose')

var schema = mongoose.schema

var articleSchema = new mongoose.Schema({
    title : String,
    description : String,
    tags : [String],
    createdAt :{ type : Date ,default: new Date()},
    likes : { type: Number , default :0}
})