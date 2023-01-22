const { registerUser, login, getToken } = require("../services/user-service")

const signUp = async (req, res) => {
    try {
        const data = await registerUser(req.body);
        res.status(data.status).json(data)
    } catch (error) {
        res.status(error?.status || 500).json(error.message)
    }
}

const signIn = async (req, res) => {
    try {
        const data = await login(req.body);
        res.status(data.status).json(data)
    } catch (error) {
        res.status(error?.status || 500).json(error.message)
    }
}

const generateToken = async (req, res) => {
    try {
        const data = await getToken(req.body.refreshToken);
        res.status(data.status).json(data)
    } catch (error) {
        res.status(error?.status || 500).json(error.message)
    }
}

const iAmLoggedIn = (req, res) => {
    res.send("Loggedin Successfully!")
}

module.exports = {
    signUp,
    signIn,
    generateToken,
    iAmLoggedIn
}