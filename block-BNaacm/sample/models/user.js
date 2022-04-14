var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true},
    favorites:[String],
    marks:[Number],
    password: { type:String, minimum:5, maximim:15 },
    created_at : { type: Date, required: true, default: Date.now } 
}, {timestamp:true});


var User = mongoose.model('User',userSchema);
module.exports = User;