const express = require('express');
const router = express.Router();
const path = require('../controlers/contacts')
router.get('/', path.getData);

module.exports = router;