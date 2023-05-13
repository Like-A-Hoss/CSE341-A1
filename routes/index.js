const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const specs = require('../swagger.json');

router.use('/', require('./me'));
router.use('/random', require('./random'))
router.use('/contacts', require('./contacts'));
router.use('/search', require('./search'));
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
//router.use('/post', require('./contacts_new'));
//router.use('/byId', )
//router.use('/id-to-modify', require('./contacts_update'))
//router.use('/remove', require('./delete'))

module.exports = router;