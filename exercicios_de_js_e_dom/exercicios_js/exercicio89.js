const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos"];

const modificarNomes = array => array.map(str => str.charAt(0).toLowerCase() + str.slice(1, -1) + str.slice(-1).toUpperCase());

console.log(modificarNomes(nomes));