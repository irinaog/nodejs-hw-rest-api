const { Contact, schemas } = require("./contacts");
const { User, authSchema, updateSubscriptionSchema } = require('./user');

module.exports = {
    Contact, schemas,
    User, authSchema, updateSubscriptionSchema
}