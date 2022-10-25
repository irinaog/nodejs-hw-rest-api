const bcrypt = require('bcryptjs');
const { User } = require("../../models/user");
const { RequestError } = require('../../helpers');
const gravatar = require('gravatar');

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        console.log(user)
        throw RequestError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarUrl = gravatar.url(email);
    console.log(avatarUrl)
    const newUser = await User.create({ email, password:hashPassword, avatarUrl});
    res.status(201).json({
        user: {      
        email: newUser.email,
        subscription: "starter"
        }
    })
}

module.exports = register;
