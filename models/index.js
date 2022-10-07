const { Contact, schemas } = require("./contacts");
const { User, authSchema } = require('./user');

module.exports = {
    Contact, schemas,
    User, authSchema
}