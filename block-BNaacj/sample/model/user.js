var mongoose = require('mongoose');

var schema = mongoose.schema;

var userSchema = new schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true},
    favorites:[String],
    marks:[Number],
    password: { type:String, minimum:5, maximim:15 },
    created_at : { type: Date, required: true, default: Date.now } 
}, {timestamp:true});

var addressSchema  = new schema({
 village: String,
 city : String,
 state : String,
 pin : Number,
 user : schema.Types.objectId

})