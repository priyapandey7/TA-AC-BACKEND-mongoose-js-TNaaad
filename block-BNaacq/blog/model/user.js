
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name :{type: String, required: true},
    email :{type: String, required:/@/},
    age : {type: Number, default: 0}

}, {timestamps : true})

var User = mongoose.model('User', userSchema)

module.exports = User;














// Each user can have fields:-

// - name
// - email
// - age