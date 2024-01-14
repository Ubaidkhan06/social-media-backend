const { registerUser, loginUser } = require("../controllers/auth.controller")
const registerMiddleware = require("../middleware/register.middleware")

const router = require("express").Router()


router.route("/register").post(registerMiddleware, registerUser)
router.route("/login").post(loginUser)


module.exports = router