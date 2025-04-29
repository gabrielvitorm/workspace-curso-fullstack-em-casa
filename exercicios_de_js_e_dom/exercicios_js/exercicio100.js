const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 6, 12, 30, 8, 16];

const filtrarNumeros = array => array.filter(num => num % 10 === 0);

console.log(filtrarNumeros(numeros));