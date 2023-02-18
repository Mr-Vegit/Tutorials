const RecentId = async(req,res)=>{
    const id = req.params.id;
    const type = req.query.type;
    const loremed = { "episodeId": id, "type": type }
    res.status(200).render('index.pug', loremed)
}
const PopularAnime = async(req,res)=>{
    const params = { "episodeId": "1" }
    res.status(200).render('popularAnime.pug', params)
}
const PopularAnimeId = async(req,res)=>{
    const id = req.params.id;
    const loremed = { "episodeId": id }
    res.status(200).render('popularAnime.pug', loremed)
}
const AnimeWatchEpisode = async(req,res)=>{
    const id = req.query.id;
    const episode = req.params.episode;
    const loremed = { "episodeName": episode, "episodeId": id }
    res.status(200).render('videoPlayer.pug', loremed)
}
const AnimeDetailsAnime = async(req,res)=>{
    const anime = req.params.anime;
    const loremed = { "animeName": anime}
    res.status(200).render('animeDetails.pug', loremed)
}
const Movies = async(req,res)=>{
    const loremed = { "page": "1" }
    res.status(200).render('movies.pug', loremed)
}
const MoviesId = async(req,res)=>{
    const id = req.params.id;
    const loremed = {"page": id }
    res.status(200).render('movies.pug', loremed)
}
const Search = async(req,res)=>{
    const keys = req.query.keyw;
    const loremed = { "key": keys}
    res.status(200).render('search.pug', loremed)
}

module.exports = {RecentId,PopularAnime,PopularAnimeId,AnimeWatchEpisode,AnimeDetailsAnime,Movies,MoviesId,Search};