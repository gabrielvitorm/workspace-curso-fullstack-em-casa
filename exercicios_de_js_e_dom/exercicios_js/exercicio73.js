const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const duplicarVogais = array => array.map(str => str.replace(/[aeiouAEIOU]/gi, (v) => v + v));

console.log(duplicarVogais(nomes));