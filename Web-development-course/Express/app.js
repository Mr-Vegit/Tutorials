const express = require("express");

const app =express();
const port = 80;//localhost 

//For serving static files
app.use('/static', express.static('static'))

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
