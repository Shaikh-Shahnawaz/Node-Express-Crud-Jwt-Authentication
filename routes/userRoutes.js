const express = require("express")
const { signupUser,loginUser } = require("../controllers/userController")
const { middlewareAuthentication } = require("../middlewares/passwordbcrypt")
const router = express.Router()



// router.get("/",showUser)
router.post("/login",loginUser)
router.post("/signup",middlewareAuthentication,signupUser)


module.exports = router