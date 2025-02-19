const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { RequestError } = require("../../helpers");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        throw RequestError(401, 'Email or password is wrong')
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw RequestError(401, 'Email or password is wrong')
    }
    const payload = {
        id:user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    await User.findByIdAndUpdate(user._id,{token})
    res.status(201).json({
        token,
        user: {
            email: email,
            subscription: "starter"
        }
    })

};

module.exports = login;