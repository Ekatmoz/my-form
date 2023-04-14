const { Router } = require('express');
const { getForm, postForm } = require('./FormController');
const router = Router()

router.get('/', getForm);
router.post('/', postForm);

module.exports = router;