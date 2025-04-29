const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 6, 12, 30];

const filtrarNumerosMultiplosDe6 = array => array.filter(num => num % 6 === 0);

console.log(filtrarNumerosMultiplosDe6(numeros));