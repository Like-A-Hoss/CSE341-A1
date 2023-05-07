const express = require('express');
const router = express.Router();
const path = require('../controlers/contacts')

router.post('/', path.postNew);

module.exports = router;