const express = require("express");
const mongoose = require("mongoose");

//connect to databse
mongoose.connect("mongodb://localhost/connect-mongoose",
{ useNewUrlparser: true , useUnifiedTopology: true },
(err) => {
    console.log('Databse connected');
})

//app 
var app = express();

app.get('/',(req,res) => {
    res.send('Welcom to mongoose');
})


//port
const port =  3000
app.listen(port,(req,res) => {
    console.log('Server is listen on port 3000');
});