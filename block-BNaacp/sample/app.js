var express = require('express');

var mongoose = require('mongoose')

var User = require('./models/user');

mongoose.connect("mongodb://localhost/sample",
(err) => {
    console.log( err ? err : "connected True");
});

var app = express();

//middleware
app.use(express.json())

app.get('/',( req,res ) => {
    res.send('Welcome');
})

app.post('/user',(req,res) => {

 console.log( req.body);

 User.create(req.body, (err,user ) =>{
  console.log(err,user);
 }) 
 //   res.json(user)
})

app.get('/user',(req,res) =>{
    user.find({},(err , user) =>{
    console.log(err,user);
    res.json({user:user})
    })
})

app.get('/user/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
    user.findById(id, (err, user) =>{
      console.log(err);
      res.json(user);
  })
})

//update  document
app.put('/user/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
     user.findByIdAndUpdate(id, req.body,{new:true} ,(err, updateUser) =>{
      console.log(err);
      res.json(updateUser);
  })
})

app.detete('/user/:id',(req,res) => {
    //grap the id
    var id = req.params.id;
    user.findByIdAndDelete(id, req.body,{new:true} ,(err, deleteUser) =>{
      console.log(err);
      res.send(`${deleteUser.name} was deleted`);
  })
})



app.listen(3000,() =>{
    console.log('server is listing on port 3000');
});