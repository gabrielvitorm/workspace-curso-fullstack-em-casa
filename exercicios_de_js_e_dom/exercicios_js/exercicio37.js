const palavras = ["Java", "Python", "JavaSript", "Ruby", "C#"];

const palavrasInverso = palavras.map(s => s.split('').reverse().join(''));

console.log(palavrasInverso);