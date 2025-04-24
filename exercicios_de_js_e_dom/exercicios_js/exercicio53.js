const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const substituirVogais = array => array.map(str => str.replace(/[aeiouAEIOU]/g, ''));

console.log(substituirVogais(nomes));