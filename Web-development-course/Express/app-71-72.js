const express = require("express");
const path = require('path');
const app =express();
const port = 80;//localhost 

//For serving static files
app.use('/static', express.static('static'));

// set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views',path.join(__dirname,'templates'));

//our pug demo end-point
app.get("/demo",(req,res)=>{
  res.status(200).render('demo', { title: 'Hey Vegit', message: 'Hello there! and thanks for teaching me how to use pug in the 72nd tutorial' });  
});

app.get("/",(req,res)=>{
  res.status(200).send("This is homepage of my first express app with Vegit");  
});

app.get("/about",(req,res)=>{
  res.send("This is about page of my first express app with Vegit");  
});
app.get("/this",(req,res)=>{
  res.status(404).send("this page is not found");  
});

app.post("/about",(req,res)=>{
  res.send("This is a post request about page of my first express app with Vegit");  
});



app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
});
