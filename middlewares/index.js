const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const authenticate = require('./authenticate');
const upload = require('./upload');
const avatarEditor = require('./avatarEditor');

module.exports = {
    validateBody,
    isValidId,
    authenticate,
    upload,
    avatarEditor,
};