const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 6, 12, 30, 8, 16];

const filtrarNumerosDividosPor8 = array => array.filter(num => num % 8 === 0);

console.log(filtrarNumerosDividosPor8(numeros));