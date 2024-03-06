const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


const colorsCopia = [...colors];

colorsCopia.splice(2, 1);

console.log(colors);
console.log(colorsCopia);