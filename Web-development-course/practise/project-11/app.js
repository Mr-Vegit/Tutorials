if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require("express");
const path = require('path');
const app = express();
const port = process.env.PORT||80;
const bcrypt = require("bcrypt")
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require('method-override')
const fs = require('fs');
initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)
const users = JSON.parse(fs.readFileSync('data.json'))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))
function checkAuthenticatedUser(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/login")
}
function checkNotAuthenticatedUser(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect("/")
    }
    next()
}

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); //For serving static files
app.use('/img', express.static(path.join(__dirname, 'static/img')));
app.use('/js', express.static(path.join(__dirname, 'static/js')));
app.use('/css', express.static(path.join(__dirname, 'static/css')));; //For serving static files
app.use(express.urlencoded({ extended: false }))

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // set the template engine as pug
app.set('views', path.join(__dirname, 'templates')); //set the views directory

//END_POINTS
app.get('/',checkAuthenticatedUser, (req, res) => {
    const params = { "type": "recent-release", "episodeId": '1' }
    res.status(200).render('index.pug', params)
})
app.get('/recent-release/:id',checkAuthenticatedUser, (req, res) => {
    const id = req.params.id;
    const type = req.query.type;
    const loremed = { "episodeId": id, "type": type }
    res.status(200).render('index.pug', loremed)
})
app.get('/Popular-Anime', checkAuthenticatedUser,(req, res) => {
    const params = { "episodeId": "1" }
    res.status(200).render('popularAnime.pug', params)
})
app.get('/Popular-Anime/:id', checkAuthenticatedUser,(req, res) => {
    const id = req.params.id;
    const loremed = { "episodeId": id }
    res.status(200).render('popularAnime.pug', loremed)
})
app.get('/anime-watch/:episode',checkAuthenticatedUser, (req, res) => {
    const id = req.query.id;
    const episode = req.params.episode;
    const loremed = { "episodeName": episode, "episodeId": id }
    res.status(200).render('videoPlayer.pug', loremed)
})
app.get('/anime-details/:anime',checkAuthenticatedUser, (req, res) => {
    const anime = req.params.anime;
    const loremed = { "animeName": anime}
    res.status(200).render('animeDetails.pug', loremed)
})
app.get('/movies',checkAuthenticatedUser, (req, res) => {
    const loremed = { "page": "1" }
    res.status(200).render('movies.pug', loremed)
})
app.get('/movies/:id',checkAuthenticatedUser, (req, res) => {
    const id = req.params.id;
    const loremed = {"page": id }
    res.status(200).render('movies.pug', loremed)
})

app.get('/search', checkAuthenticatedUser,(req, res) => {
    const keys = req.query.keyw;
    const loremed = { "key": keys}
    res.status(200).render('search.pug', loremed)
})
app.get("/anime-list",checkAuthenticatedUser,(req,res)=>{
    // const parms = JSON.parse(req.query['season'],res.query['format'],res.query['genres'],res.query['status'],);
    const keys = req.query.genre;
    const loremed = { "genre": keys,"pagenum":"1"}
    res.status(200).render('anime-list.pug', loremed)
    // const loremed = { }
})
app.get("/anime-list/:page",checkAuthenticatedUser,(req,res)=>{
    // const parms = JSON.parse(req.query['season'],res.query['format'],res.query['genres'],res.query['status'],);
    const keys = req.query.genre;
    const page = req.params.page;
    const loremed = { "genre": keys,"pagenum":page}
    res.status(200).render('anime-list.pug', loremed)
    // const loremed = { }
})

// SECURITY
app.get("/login", checkNotAuthenticatedUser, (req, res) => {
    res.status(200).render('login.pug')
})
app.post("/login", checkNotAuthenticatedUser, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
}))
app.get("/register", checkNotAuthenticatedUser, (req, res) => {
    res.status(200).render('register.pug')
})
app.post("/register", checkNotAuthenticatedUser, async (req, res) => {///Important
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        },)
        fs.writeFileSync('data.json', JSON.stringify(users, null, 2));
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    console.log(users);
})
app.delete('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});


// START THE SERVER
app.listen(port, () => {
    console.log(`The application has started successfully on port ${port}`);
});



