const express = require('express');
const router = express.Router();

router.use('/', require('./me'));
router.use('/random', require('./random'))
router.use('/contacts', require('./contacts'));
router.use('/search', require('./search'));
//router.use('/post', require('./contacts_new'))
//router.use('/id-to-modify', require('./contacts_update'))
//router.use('/remove', require('./delete'))

module.exports = router;