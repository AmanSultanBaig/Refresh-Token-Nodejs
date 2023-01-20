const jwt = require("jsonwebtoken");

const signToken = async (data) => {
    const access_token = await jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "2m" });
    return access_token;
}

const refreshToken = async (data) => {
    const refresh_token = await jwt.sign(data, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "15m" });
    return refresh_token;
}

const verifyToken = async (token, secret_key) => {
    const isVerified = await jwt.verify(token, secret_key);
    return isVerified;
}

module.exports = {
    signToken,
    refreshToken,
    verifyToken
}
