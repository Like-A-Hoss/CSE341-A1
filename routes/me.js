const express = require('express');
const router = express.Router();
const path = require('../controlers/lesson1')

router.get('/', path.meRoute);

module.exports = router;