const userAnwsers = [];

function confirmExample(description) {
    return confirm(description);
}

function promptExample(description) {
    return prompt(description);
}

function father(description, callback) {

    userAnwsers.push(callback(description));

}

father('Hola como estas =)', confirmExample);
father('Como te llamas?', promptExample);

console.log(userAnwsers);
