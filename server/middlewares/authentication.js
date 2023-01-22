const { verifyToken } = require("../utils/jwt")

const isAuthenticated = async (req, res, next) => {
    try {
        let token = req.headers['authorization'].split(" ")[1];
        await verifyToken(token, process.env.ACCESS_TOKEN_SECRET);
        next()
    } catch (error) {
        res.status(401).json({
            error: 'Unauthorized! Invalid request!'
        });
    }
}

module.exports = isAuthenticated;