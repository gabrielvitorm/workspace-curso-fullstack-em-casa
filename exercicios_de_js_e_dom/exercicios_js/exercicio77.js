const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const modificarNomes = array => array.map(str => str.toUpperCase().split('').reverse().join(''));

console.log(modificarNomes(nomes));