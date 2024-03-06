const numbersList = [];

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function father(a, b, callback) {
    const result = callback(a, b);
    numbersList.push(result);
}

//SUMA
father(6, 2, sum);
father(10, 20, sum);

//RESTA
father(90, 30, substract);
father(87, 100, substract);


console.log(numbersList);