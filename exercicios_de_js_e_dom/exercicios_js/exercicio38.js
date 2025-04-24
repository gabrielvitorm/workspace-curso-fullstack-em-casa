const palavras = ["Java", "Python", "JavaSript", "Ruby", "C#"];

const palavrasTerminadasEmA = array => array.filter(str => str.endsWith("a"));

console.log(palavrasTerminadasEmA(palavras));
