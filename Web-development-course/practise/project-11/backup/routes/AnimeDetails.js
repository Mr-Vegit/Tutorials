const express = require("express");
const router = express.Router();
const {AnimeDetailsAnime} = require("../controllers/product.js");
//     Popular-Anime/
router.route('/:anime').get(AnimeDetailsAnime)

module.exports = router;