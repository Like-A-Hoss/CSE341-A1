const express = require('express');
const router = express.Router();
const path = require('../controlers/lesson1')

router.get('/', path.randomRoute);

module.exports = router;