const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');
const { RequestError } = require('../helpers');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const { authorization = '' } = req.headers;
        const [bearer  , token ] = authorization.split(" ");
        if (bearer !== 'Bearer'||!token) {
            throw RequestError(401, "Not authorized")
        }
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if (!user || !user.token) {
                throw Error();
            }
            req.user = user;
            next()
        } catch (error) {
            console.log(error.message)
            throw RequestError(401, "Not authorized")
        }
    } catch (error) {
        next(error)
    }
   
}

module.exports = authenticate;