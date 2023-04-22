function pick_name(names){
    const random = Math.floor(Math.random()*names.length);
    const studnet_name = names[random];
    return studnet_name;
}
