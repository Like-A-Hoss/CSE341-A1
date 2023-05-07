const express = require('express');
const router = express.Router();
const path = require('../controlers/contacts')

router.put('/', path.update);

module.exports = router;