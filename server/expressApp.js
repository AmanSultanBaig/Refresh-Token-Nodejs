const cors = require("cors");
const express = require("express")
require("dotenv").config()

module.exports = (app) => {
    app.get("/", (req, res) => res.send("Express Application!"))

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    let port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`App is running on port ${port}`))
}