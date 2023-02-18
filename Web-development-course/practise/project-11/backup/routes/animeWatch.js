const express = require("express");
const router = express.Router();
const {AnimeWatchEpisode} = require("../controllers/product.js");

//     anime/

router.route('/anime-watch/:episode').get(AnimeWatchEpisode)

module.exports = router;
