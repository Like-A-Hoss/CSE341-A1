const express = require('express');
const app = express();
const lesson1_controler = require('./controlers/lesson1');

app.get('/', lesson1_controler.meRoute);
app.get('/random',lesson1_controler.randomRoute);

const port = 3000;
app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));

//function pick_name(names){
//    const random = Math.floor(Math.random()*names.length);
//    const studnet_name = names[random];
//    return studnet_name;
//}