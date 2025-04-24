const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const minusculosEInversos = array => array.map(str => str.toLowerCase().split('').reverse().join(''));

console.log(minusculosEInversos(nomes));