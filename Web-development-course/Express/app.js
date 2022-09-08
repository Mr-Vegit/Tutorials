const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;//localhost 

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'templates')); //set the views directory

//END_POINTS
app.get('/',( req, res)=>{
    const con = "This is the best content available in the internet so use it wisely"
    const params = {'title':'Pubg is a great game',"content": con}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    user_name = req.body.user_name
    age = req.body.age
    gender = req.body.gender
    address= req.body.address
    more= req.body.more
    let User_Data = `
client          = ${user_name}
His age         = ${age} 
His gender is   = ${gender}
His address is  = ${address}
More info       = ${more} 

`

    // fs.writeFileSync('output.txt', User_Data) //way showed in the tutorial
    fs.appendFile('output.txt', User_Data,(req,res)=>{
        console.log("Your data is saved");
    })

    const params = {'message':'Your form has been submitted successfully'}
    res.status(200).render('index.pug',params)

})


// START THE SERVER
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
});
