const express = require('express');
const app = express();

const databse = require("./db/db_connection")
const expressApplication = require("./expressApp")

const startApplication = async () => {
    await databse(process.env.DB_URL)
    expressApplication(app)
}

startApplication()