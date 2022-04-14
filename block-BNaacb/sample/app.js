var express = require('express');
var mongoose = require('mongoose');

//connect to databse
mongoose.connect("mongodb://localhost/connect-mongoose",
{ useNewUrlparser: true , useUnifiedTopology: true },
(err) => {
    console.log('Databse connected');
})

var app = express();

app.get('/',(req,res) => {
    res.send('Welcome to mongoose');
})


app.listen(3000, () =>{
    console.log('server is listening on port 3000');
})