const userSchema = require("../db/models/user")

const registerUser = async (payload) => {
    const { email } = payload;
    try {
        const isEmailExist = await userSchema.findOne({ email });
        if (isEmailExist) {
            await userSchema.create(payload);
            return { message: "Sign up successfully!", success: true, status: 200 }
        } else {
            return { message: "No record found", success: false, status: 404 }
        }
    } catch (error) {
        return { message: error, success: false, status: 400 }
    }
}

module.exports = {
    registerUser
}