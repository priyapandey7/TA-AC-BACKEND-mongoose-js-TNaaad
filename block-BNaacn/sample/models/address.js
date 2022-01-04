var mongoose = require('mongoose')

var schema = mongoose.schema

var addressSchema = new mongoose.Schema({
    village : String,
    city :  {type:String, required: true},
    state : {type:String, required: true},
    pin: Number,
    user : Schema.Types.ObjectId

},{timestamps:true});

var  Address = mongoose.model('Address',addressSchema);
module.exports = Address;