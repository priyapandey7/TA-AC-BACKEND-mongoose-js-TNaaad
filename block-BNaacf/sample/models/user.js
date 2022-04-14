var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true},
    favorites: [String], //array of string
    marks:  [Number] //array of number
}, {timestamp:true});

var addressSchema  = new schema({
 village: String,
 city : String,
 state : String,
 pin : Number,
 user : schema.Types.objectId

})
