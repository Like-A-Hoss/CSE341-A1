const students = ["Kraude, Jordan", "Cutchen, Eli", "Thompson, Alicia", "Arndt, Diane", "Dickson, Robin", "Thomas, McKay", "Oku, James", "Hoskins, Nathan" ];
const random_name = pick_name(students);

const meRoute = (req,res) => {
    res.send("Nathan S. Hoskins");
  };
const randomRoute = (req,res) => {
    res.send(random_name);
};

module.exports = {
    meRoute, randomRoute,
};

function pick_name(names){
    const random = Math.floor(Math.random()*names.length);
    const studnet_name = names[random];
    return studnet_name;
};