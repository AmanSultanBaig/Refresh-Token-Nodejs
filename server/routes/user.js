const express = require("express");
const router = express.Router();

const { signUp, signIn } = require("../controllers/user.controller")

router.post("/signup", signUp)
router.post("/login", signIn)

module.exports = router;