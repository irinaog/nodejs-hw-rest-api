const { Schema, model, } = require('mongoose');
const Joi = require('joi');
const { handleSaveErrors } = require('../helpers')

const subscription = ["starter", "pro", "business"];

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
        enum: subscription,
        default: "starter"
    },
    token: {
        type: String,
        default: null,
    },
    avatarUrl: {
        type: String,
        required:true,
    },
    verify: {
        type: Boolean,
        default:false,  
    },
    verificationToken: {
        type: String,
        required:[true, 'Verify token is required'],
    }
}, {versionKey:false, timestamps:true});

userSchema.post('save', handleSaveErrors);

const authSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string().valid(...subscription),
});


const User = model('user', userSchema);

module.exports ={User, authSchema, updateSubscriptionSchema}