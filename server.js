const express = require('express');
const app = express();
const lesson1_controler = require('./controlers/lesson1');
const bodyParser = require('body-parser');
// require('custom-env').env('info');
require('dotenv/config')
//app.get('/', lesson1_controler.meRoute);
//app.get('/random',lesson1_controler.randomRoute);
app.use(bodyParser.json()).use((req, res, next) =>{res.setHeader('access-controll-allow-origin', '*'); next();}).use('/', require('./routes'));

console.log('starting DB connection');

const client = require('./models/db_connection');
console.log('statring DB init');
client.initDb((err) => {if (err) {console.log(err)} else {app.listen(process.env.PORT || port);
    console.log('Web Server is listening at port '+ (process.env.port || port));}});


