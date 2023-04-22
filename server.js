const express = require('express');
const app = express();
const students = ["Kraude, Jordan", "Cutchen, Eli", "Thompson, Alicia", "Arndt, Diane", "Dickson, Robin", "Thomas, McKay", "Oku, James", "Hoskins, Nathan" ];
app.get('/', (req,res) => {
  res.send("Nathan S. Hoskins");
});
app.get('/random', (req,res) => {
    res.send(pick_name(students));
});

const port = 3000;
app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));

function pick_name(names){
    const random = Math.floor(Math.random()*names.length);
    const studnet_name = names[random];
    return studnet_name;
}