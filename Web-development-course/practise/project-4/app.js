const express = require("express");
const fs = require("fs");
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
const port = 80;

const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/ContactDance');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
// define mongoose schema
const ContactSchema = new mongoose.Schema({
    client: String,
    phone: String,
    email: String,
    address: String,
    concern: String,
  });
const Contact = mongoose.model('Contact', ContactSchema);

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

//save data in mongoose database
app.post('/contact',(req,res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("This item has been saved in the database")
    }).catch(()=>{
        res.status(404).send("item was not saved to the database")
    });
})


// START THE SERVER
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
});
