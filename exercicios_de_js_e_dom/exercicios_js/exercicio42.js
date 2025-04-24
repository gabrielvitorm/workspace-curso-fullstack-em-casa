const palavras = ["java", "python", "javaSript", "ruby", "c#"];

const palavarComMaisDeCinco = array => array.filter(str => str.length > 5);

console.log(palavarComMaisDeCinco(palavras));