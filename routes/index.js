const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const specs = require('../swagger.json');

router.use('/', require('./me'));
router.use('/random', require('./random'))
router.use('/contacts', require('./contacts'));
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


module.exports = router;