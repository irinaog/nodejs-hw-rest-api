const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth')
const { ctrlWrapper } = require('../../helpers')
const { validateBody } = require("../../middlewares")
const {authSchema} = require('../../models')

router.post('/users/signup', validateBody(authSchema), ctrlWrapper(ctrl.register));
router.post('/users/login', validateBody(authSchema), ctrlWrapper(ctrl.login));

module.exports = router;