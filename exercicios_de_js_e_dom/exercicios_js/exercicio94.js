const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos", "Gabriella", "Feliciano", "Bernadete", "Wanderley"];

const filtrarNomes = array => array.filter(str => str.toLowerCase().includes('y'));

console.log(filtrarNomes(nomes));