const userSchema = require("../db/models/user")
const { encryptPassword, decryptPassword } = require("../utils/bcrypt")
const { signToken, refreshToken, verifyToken} = require("../utils/jwt")
class UserService {

    registerUser = async (payload) => {
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

    login = async (payload) => {
        const { email, password } = payload;
        try {
            const isEmailExist = await userSchema.findOne({ email });
            if (isEmailExist) {
                let isPasswordMatched = await decryptPassword(password, isEmailExist.password);
                if (isPasswordMatched) {
                    let accessToken = await signToken({ id: isEmailExist.id });
                    let refToken = await refreshToken({ id: isEmailExist.id });

                    let data = {
                        accessToken,
                        refreshToken: refToken
                    }
                    return { message: "Login successfully!", data, success: true, status: 200 }
                } else {
                    return { message: "Login failed, Invalid credentials", success: false, status: 400 }
                }
            } else {
                return { message: "User not found!", success: false, status: 400 }
            }
        } catch (error) {
            return { message: error, success: false, status: 400 }
        }
    }

    getToken = async (refreshToken) => {
        try {
            let decodeToken = await verifyToken(refreshToken, process.env.REFRESH_TOKEN_SECRET);
            if (decodeToken) {
                // generate access token
                let accessToken = await signToken({ id: decodeToken.id });
                return { message: "Token send successfully!", accessToken, success: true, status: 200 }
            } else {
                return { message: "Invalid token or token has been expired! Please login again", success: false, status: 400 }
            }
        } catch (error) {
            return { message: error, success: false, status: 400 }
        }
    }
}

module.exports = new UserService;