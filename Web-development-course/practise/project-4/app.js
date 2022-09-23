const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const port = 80;

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/contactDance');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// define mongoose schema
const kittySchema = new mongoose.Schema({
    name: String
  });
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'templates')); //set the views directory

//END_POINTS
app.get('/',( req, res)=>{
    const params = {}
    res.status(200).render('home.pug',params)
})
app.get('/contact',( req, res)=>{
    const params = {}
    res.status(200).render('contact.pug',params)
})
app.post('/contact',(req,res)=>{
    client = req.body.client
    phone = req.body.phone
    email = req.body.email
    address= req.body.address
    concern= req.body.concern
    let User_Data = `
client          = ${client}
His phone number= ${phone} 
His email is    = ${email}
His address is  = ${address}
More info       = ${concern} 

`

    // fs.writeFileSync('output.txt', User_Data) //way showed in the tutorial
    fs.appendFile('output.txt', User_Data,(req,res)=>{
        console.log("Your data is saved");
    })

    const params = {'message':'Your form has been submitted successfully'}
    res.status(200).render('home.pug',params)

})


// START THE SERVER
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
});
