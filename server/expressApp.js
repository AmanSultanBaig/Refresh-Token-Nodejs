require("dotenv").config()
module.exports = (app) => {
    app.get("/", (req, res) => res.send("hello world"))

    let port = process.env.PORT || 8000;
    app.listen(port, () => console.log(`App is running on port ${port}`))
}