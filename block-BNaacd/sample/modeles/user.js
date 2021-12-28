var mongoose = require('mongoose');

var schema = mongoose.schema;

var userSchema = new schema({
    Name:  String, 
    age: {type: Number , default :0 },
    Email:   {type : String , lowercase :true}
});
