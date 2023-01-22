const express = require("express");
const router = express.Router();

const isAuthenticated = require("../middlewares/authentication")

const { signUp, signIn, generateToken, iAmLoggedIn } = require("../controllers/user.controller")

router.post("/signup", signUp)
router.post("/login", signIn)
router.post("/get-token", generateToken)
router.post("/protected", isAuthenticated, iAmLoggedIn)

module.exports = router;