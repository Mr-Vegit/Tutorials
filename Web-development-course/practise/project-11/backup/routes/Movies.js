const express = require("express");
const router = express.Router();
const {Movies,MoviesId} = require("../controllers/product");
//     Popular-Anime/
router.route('/').get(Movies)
router.route('/:id').get(Movies)


module.exports = router;