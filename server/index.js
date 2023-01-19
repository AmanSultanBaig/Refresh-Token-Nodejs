const express = require('express');
const app = express();

const expressApplication = require("./expressApp")

const startApplication = () => {
    expressApplication(app)
}

startApplication()