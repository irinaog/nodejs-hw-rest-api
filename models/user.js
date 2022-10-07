const { Schema, model, SchemaTypes } = require('mongoose');
const Joi = require('joi');
const { handleSaveErrors } = require('../middlewares')

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    }
}, {versionKey:false, timestamps:true});

userSchema.post('save', handleSaveErrors);

const registerSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const loginSchema = Joi.object({
    email: Joi.string().required(),
    password:Joi.string().required(),
})

const authSchemas = {
    registerSchema,
    loginSchema,
};

const User = model('user', userSchema);

module.exports ={User, authSchemas}