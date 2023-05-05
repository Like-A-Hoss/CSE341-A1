const express = require('express');
const router = express.Router();

router.route('/contacts', require('./contacts'))

module.exports = router;