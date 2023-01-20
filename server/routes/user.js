const express = require("express");
const router = express.Router();

const { signUp, signIn, generateToken } = require("../controllers/user.controller")

router.post("/signup", signUp)
router.post("/login", signIn)
router.post("/get-token", generateToken)

module.exports = router;