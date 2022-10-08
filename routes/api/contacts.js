const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/contacts');
const { ctrlWrapper } = require('../../helpers')
const { validateBody, isValidId, authenticate } = require("../../middlewares")
const { schemas } = require("../../models")


router.get('/', authenticate, ctrlWrapper(ctrl.getAll));

router.get('/:id', authenticate,isValidId, ctrlWrapper(ctrl.getById));

router.post('/', authenticate, validateBody(schemas.addSchema),   ctrlWrapper(ctrl.add));

router.delete('/:id',isValidId, ctrlWrapper(ctrl.removeById));

router.put('/:id', authenticate, isValidId, ctrlWrapper(ctrl.updateById));

router.patch('/:id/favorite', authenticate, isValidId, validateBody(schemas.updateFavoriteSchema), ctrlWrapper(ctrl.updateFavorite));


module.exports = router;





