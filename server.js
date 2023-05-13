const express = require('express');
const app = express();
const lesson1_controler = require('./controlers/lesson1');
const bodyParser = require('body-parser');
const temp_port = process.env.PORT || 3000;
require('dotenv/config')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(bodyParser.json()).use((req, res, next) =>{res.setHeader('access-controll-allow-origin', '*'); next();}).use('/', require('./routes'));

console.log('starting DB connection');

const client = require('./models/db_connection');
console.log('statring DB init');
client.initDb((err) => {if (err) {console.log(err)} else {app.listen(temp_port);
    console.log('Web Server is listening at port '+ (temp_port));}});


