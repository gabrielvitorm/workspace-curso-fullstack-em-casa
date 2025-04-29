const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 6, 12, 30, 8, 16, 7, 15, 3];

const filtrarNumeros = array => array.filter(num => num % 2 !== 0 && num <20);

console.log(filtrarNumeros(numeros));