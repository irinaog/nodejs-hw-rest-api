const bcrypt = require('bcryptjs');
const { User } = require("../../models/user");
const { RequestError, sendEmail } = require('../../helpers');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw RequestError(409, "Email in use")
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarUrl = gravatar.url(email);
    const verificationToken = nanoid();
    const newUser = await User.create({ email, password:hashPassword, avatarUrl, verificationToken});
    
    const mail = {
        to: email,
        subject: "Verification",
        html:`<a target = "_blank href = "http://localhost:3000/api/auth/users/verify/${verificationToken}">Click here</a>`
    }
    await sendEmail(mail);

    res.status(201).json({
        user: {      
        email: newUser.email,
            subscription: "starter",
            verificationToken,
        }
    })
}

module.exports = register;
