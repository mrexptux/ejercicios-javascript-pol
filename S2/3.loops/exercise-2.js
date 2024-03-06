
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}


// usando for...in
for (let key in alien) {

    // Propiedades
    console.log(`${key} => ${alien[key]}`);
}