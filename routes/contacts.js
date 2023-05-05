const express = require('express');
const router = express.Router();

router.get('/', require('../controlers/contacts').getData);

module.exports = router;