const express = require('express');
const app = express();
const lesson1_controler = require('./controlers/lesson1');
// require('custom-env').env('info');
require('dotenv/config')
app.get('/', lesson1_controler.meRoute);
app.get('/random',lesson1_controler.randomRoute);


app.listen(process.env.PORT || port);
console.log('Web Server is listening at port '+ (process.env.port || port));

//function pick_name(names){
//    const random = Math.floor(Math.random()*names.length);
//    const studnet_name = names[random];
//    return studnet_name;
//}
console.log('starting DB connection');
const client = require('./models/db_connection');


