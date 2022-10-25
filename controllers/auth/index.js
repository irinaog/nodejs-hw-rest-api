const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getCurrent = require('./getCurrent');
const updateSubscription = require('./updateSubscription');
const updateAvatar = require('./updateAvatar.js');
const verify = require('./verify');
const resendVerify = require('./resendVerify');

module.exports = {
    register,
    login,
    logout,
    getCurrent,
    updateSubscription,
    updateAvatar,
    verify,
    resendVerify
};