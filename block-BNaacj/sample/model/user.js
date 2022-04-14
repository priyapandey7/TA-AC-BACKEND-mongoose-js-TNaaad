var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true},
    favorites: [String], //array of string
    marks:  [Number], //array of number
    password: {type: String, minlength :5 ,maxlength : 15},
    createAt: { type:Date , default: new Date()}
});



