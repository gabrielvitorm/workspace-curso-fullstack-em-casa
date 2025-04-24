const palavras = ["java", "python", "javaSript", "ruby", "c#"];

const primeiraLetraMaiscula = array => array.map(str => str ? str[0].toUpperCase() + str.slice(1) : str);

console.log(primeiraLetraMaiscula(palavras));

const primeiraLetraMaiscula2 = array => array.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(primeiraLetraMaiscula2(palavras));