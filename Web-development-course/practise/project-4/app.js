const express = require("express");
const path = require('path');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views',path.join(__dirname,'templates')); //set the views directory

//END_POINTS
app.get('/',( req, res)=>{
    const params = {}
    res.status(200).render('index.pug',params)
})

// START THE SERVER
app.listen(port,()=>{
    console.log(`The application has started successfully on port ${port}`);
});
