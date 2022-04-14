var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = new mongoose.Schema({
    name : String,
    emails : {type: String, lowercase: true},
    age : { type: Number , default :0},
    password: {type :String, minlength: 5},
    createdAt :{ type : Date ,default: new Date()},
    likes :{type: Number , default: 0},
    favourites:[String]
},{timestamps: true});

module.exports = mongoose.model("User" ,userSchema)