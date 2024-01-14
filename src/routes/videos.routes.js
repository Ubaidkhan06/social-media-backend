const { getAllVideos } = require("../controllers/videos.controller");
const ApiResponse = require("../utils/ApiResponse");

const router = require("express").Router();

router.route("/").get(getAllVideos);

module.exports = router;
