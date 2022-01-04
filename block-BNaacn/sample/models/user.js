var mongoose = require('mongoose')

var schema = mongoose.schema

var userSchema = new mongoose.Schema({
    name : String,
    emails : {type: String, lowercase: true},
    age : { type: Number , default :0},
    password: {type :String, minlength: 5},
    createdAt :{ type : Date ,default: new Date()},
    favourites:[String]
},{timestamps:true});