const jwt = require('jsonwebtoken');
require('dotenv').config();
const { User } = require('../models');
const { RequestError } = require('../helpers');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    try {
        const { authorization = '' } = req.headers;
        const [bearer  , token ] = authorization.split(" ");
        if (bearer !== 'Bearer') {
            throw RequestError(401, "Not authorized 01")
        }
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if (!user) {
                throw Error();
            }
            req.user = user;
            next()
        } catch (error) {
            console.log(error.message)
            throw RequestError(401, "Not authorized 02")
        }
    } catch (error) {
        next(error)
    }
   
}

module.exports = authenticate;