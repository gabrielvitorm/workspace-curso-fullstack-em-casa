const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 15, 7, 5, 3];

const numerosFiltrados = array => array.filter(num => num % 2 !== 0 && num > 15);

console.log(numerosFiltrados(numeros));