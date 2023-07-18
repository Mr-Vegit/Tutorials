// BASIC NODEJS RELATED 
const express = require("express");
const path = require('path');
const app = express();
const port = 80;


// MONGODB RELATED
const MongoDB_Url = "mongodb://127.0.0.1:27017/chatapp";
const mongoose = require('mongoose');
mongoose
.connect(MongoDB_Url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
const { Users,Messages } = require("./mongodb.js")


// SECURITY RELATED
const security = require("./routes/security.js")
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require('method-override')
const MemoryStore = require('memorystore')(session)

Users.find({}).then(user => {
    initializePassport(
        passport,
        email => user.find(users => users.email === email),
        id => user.find(users => users.id === id)
        )
    }).catch((err) => {
        if (err) return console.error(err);
});
app.use(flash())
app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))
app.use(function (req, res, next) {
    res.locals.message = req.flash();
    next();
});
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use(express.urlencoded({ extended: false }))


// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'templates')); //set the views directory

// API RELATED
const api = require("./routes/api.js")

//ENDPOINTS
app.get('/', checkAuthenticatedUser, (req, res) => {
    let user = req.user.UserName;
    res.status(200).render('index.pug', { user: user })
})
app.use("/api",checkAuthenticatedUser, api)
app.use("/security",checkNotAuthenticatedUser, security)
app.delete('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/security/login');
    });
});
app.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/security/login');
    });
});



function checkAuthenticatedUser(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/security/login")
}
function checkNotAuthenticatedUser(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/")
    }
    next()
}

// Start the Server
app.listen(port, () => {
    console.log(`The application has started successfully on port ${port}`);
});

