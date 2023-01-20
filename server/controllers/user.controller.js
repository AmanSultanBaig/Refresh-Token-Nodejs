const { registerUser, login } = require("../services/user-service")

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

module.exports = {
    signUp,
    signIn
}