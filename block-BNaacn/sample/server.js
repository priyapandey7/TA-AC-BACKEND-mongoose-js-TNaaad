var express = require('express');
var mongoose = require('mongoose');

// connect to mongoDb 
mongoose.connect("mongodb://localhost/sample",
{
useNewUrlParser: true, useUnifienedTopology: true} ,
(err) => {
    console.log(err ? err : "connected true");
});

var app = express();

app.get('/',(req,res) =>{
    res.send('Hello');
})

app.listen(3000,() =>{
    console.log('server is listning on port 3000');
})