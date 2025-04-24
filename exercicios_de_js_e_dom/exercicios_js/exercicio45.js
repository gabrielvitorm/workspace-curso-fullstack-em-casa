const palavras = ["java", "python", "javaSript", "ruby", "c#"];

const palavrasMaiusculaInverso = array => array.map(str => str.toUpperCase().split('').reverse().join(''));

console.log(palavrasMaiusculaInverso(palavras));