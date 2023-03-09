const express = require("express");
const path = require('path');
const app = express();
const port = 80;

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
app.get('/', (req, res) => {
    const params = { "type": "recent-release", "episodeId": '1' }
    res.status(200).render('index.pug', params)
})
app.get('/recent-release/:id', (req, res) => {
    const id = req.params.id;
    const type = req.query.type;
    const loremed = { "episodeId": id, "type": type }
    res.status(200).render('index.pug', loremed)
})
app.get('/Popular-Anime', (req, res) => {
    const params = { "episodeId": "1" }
    res.status(200).render('popularAnime.pug', params)
})
app.get('/Popular-Anime/:id', (req, res) => {
    const id = req.params.id;
    const loremed = { "episodeId": id }
    res.status(200).render('popularAnime.pug', loremed)
})
app.get('/anime-watch/:episode', (req, res) => {
    const id = req.query.id;
    const Animenum = req.query.num;
    const episode = req.params.episode;
    const loremed = { "episodeName": episode, "episodeId": id, "AnimeId": Animenum }
    res.status(200).render('videoPlayer.pug', loremed)
})
app.get('/anime-details/:anime', (req, res) => {
    const anime = req.params.anime;
    const dub = req.query.dub;
    const loremed = { "animeName": anime, "dub": dub }
    res.status(200).render('animeDetails.pug', loremed)
})
app.get('/movie-details/:anime', (req, res) => {
    const anime = req.params.anime;
    const loremed = { "animeName": anime }
    res.status(200).render('MovieDetails.pug', loremed)
})
app.get('/movies', (req, res) => {
    const loremed = { "page": "1" }
    res.status(200).render('movies.pug', loremed)
})
app.get('/movies/:id', (req, res) => {
    const id = req.params.id;
    const loremed = { "page": id }
    res.status(200).render('movies.pug', loremed)
})

app.get('/search', (req, res) => {
    const keys = req.query.keyw;
    const loremed = { "key": keys, "page": '1' }
    res.status(200).render('search.pug', loremed)
})
app.get('/search/:page', (req, res) => {
    const keys = req.query.keyw;
    const page = req.params.page;
    const loremed = { "key": keys, "page": page }
    res.status(200).render('search.pug', loremed)
})
app.get("/anime-list", (req, res) => {
    const keys = req.query.genre;
    const loremed = { "genre": keys, "pagenum": "1" }
    res.status(200).render('anime-list.pug', loremed)
})
app.get("/anime-list/:page", (req, res) => {
    const keys = req.query.genre;
    const page = req.params.page;
    const loremed = { "genre": keys, "pagenum": page }
    res.status(200).render('anime-list.pug', loremed)
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application has started successfully on port ${port}`);
});



