var mongoose = require('mongoose');

var schema = mongoose.schema;

var userSchema = new schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true},
    favorites:[String],
    marks:[Number]
}, {timestamp:true});

var addressSchema  = new schema({
 village: String,
 city : String,
 state : String,
 pin : Number,
 user : schema.Types.objectId

})