const express = require("express");
const router = express.Router();
const {Search} = require("../controllers/product");
//     Popular-Anime/
router.route('/').get(Search)


module.exports = router;