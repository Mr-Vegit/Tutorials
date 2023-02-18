const express = require("express");
const router = express.Router();
const {RecentId} = require("../controllers/product.js");

//           recent-release/

// router.route('/:id').get(RecentId)
router.route('/recent-release/:id').get(RecentId)

module.exports = router;