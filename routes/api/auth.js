const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth')
const { ctrlWrapper } = require('../../helpers')
const { validateBody } = require("../../middlewares")
const {authSchemas} = require('../../models')

router.post('/users/signup', validateBody(authSchemas.registerSchema), ctrlWrapper(ctrl.register))

module.exports = router;