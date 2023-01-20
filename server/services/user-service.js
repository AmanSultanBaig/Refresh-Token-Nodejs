const userSchema = require("../db/models/user")
const { encryptPassword, decryptPassword } = require("../utils/bcrypt")
const { signToken, refreshToken, verifyToken } = require("../utils/jwt")

const registerUser = async (payload) => {
    const { email, password } = payload;
    try {
        const isEmailExist = await userSchema.findOne({ email });
        if (isEmailExist) {
            return { message: "user already exist", success: false, status: 400 }
        } else {
            payload.password = await encryptPassword(password)
            const data = await userSchema.create(payload);
            return { message: "Sign up successfully!", data, success: true, status: 200 }
        }
    } catch (error) {
        return { message: error, success: false, status: 400 }
    }
}

module.exports = {
    registerUser
}