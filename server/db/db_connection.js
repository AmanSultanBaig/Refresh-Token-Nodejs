const mongoose = require("mongoose");

module.exports = async (url) => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("DB connection established!")
    } catch (error) {
        console.log("DB error")
    }
}