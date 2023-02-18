const express = require("express");
const router = express.Router();
const {PopularAnime,PopularAnimeId} = require("../controllers/product");
//     Popular-Anime/
router.route('/').get(PopularAnime)
router.route('/:id').get(PopularAnimeId)


module.exports = router;