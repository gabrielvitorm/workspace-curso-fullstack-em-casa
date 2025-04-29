const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos"];

const duplicarConsoantes = array => array.map(str => str.replace(/[^aeiou\s\d\W_]/gi, c => c + c));

console.log(duplicarConsoantes(nomes));