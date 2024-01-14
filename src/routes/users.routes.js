const {
  registerUser,
  loginUser,
} = require("../controllers/auth.controller");
const getUserDetails = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
const registerMiddleware = require("../middleware/register.middleware");
const ApiResponse = require("../utils/ApiResponse");

const router = require("express").Router();

router.route("/details/:userId").get(authMiddleware, getUserDetails)

module.exports = router;
