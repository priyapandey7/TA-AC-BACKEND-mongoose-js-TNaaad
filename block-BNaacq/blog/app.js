var express = require('express');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog', (err) => {
    console.log('database connected');
})

var app = express();

app.get('/' ,(req,res) =>{
    res.send('welcome')
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});