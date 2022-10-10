const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth')
const { ctrlWrapper } = require('../../helpers')
const { validateBody, authenticate } = require("../../middlewares")
const {authSchema, updateSubscriptionSchema} = require('../../models')

router.post('/users/signup', validateBody(authSchema), ctrlWrapper(ctrl.register));
router.post('/users/login', validateBody(authSchema), ctrlWrapper(ctrl.login));
router.get('/users/logout', authenticate, ctrlWrapper(ctrl.logout));
router.get('/users/current', authenticate, ctrlWrapper(ctrl.getCurrent));
router.patch('/users',authenticate, validateBody(updateSubscriptionSchema), ctrlWrapper(ctrl.updateSubscription));

module.exports = router;