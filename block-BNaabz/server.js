var express = require('express');
var mongoose = require('mongoose');

// connect to mongoDb
// mongoose.connect('mongodb://localhost/block-bnaabz' ,(err) => {
//     console.log(err ? err : 'connected true');
// })

var app = express();


app.get('/',(req,res) => {
    res.send('Welcom to mongoose');
})


app.listen (3000, () =>{
    console.log('server is listening on port 3000');
})