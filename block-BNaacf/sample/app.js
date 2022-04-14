var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sample', (err) => {
console.log(err ? err : 'connected true');
})

var app = express();

app.get('/',(req,res) => {
res.send('Welcome to mongoose');
})

app.listen(3000, () =>{
console.log('server is listening on port 3000');
})