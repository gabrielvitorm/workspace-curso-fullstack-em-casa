const numeros = [10, 32, 45, 67, 89, 90, 103, 81];

const numerosMultiplosDe4 = array => array.filter(num => num % 4 === 0);

console.log(numerosMultiplosDe4(numeros));