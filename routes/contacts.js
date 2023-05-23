const express = require('express');
const router = express.Router();
const path = require('../controlers/contacts');

router.get('/', path.getData);
router.get('/:id', path.getSearch);
router.post('/', path.postNew);
router.put('/:id', path.update);
router.delete('/:id', path.remove);

module.exports = router;