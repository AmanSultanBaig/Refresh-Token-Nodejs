const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const decryptPassword = async (password, hashedPassword) => {
    const isCompare = await bcrypt.compare(password, hashedPassword);
    return isCompare
}

module.exports = { encryptPassword, decryptPassword }