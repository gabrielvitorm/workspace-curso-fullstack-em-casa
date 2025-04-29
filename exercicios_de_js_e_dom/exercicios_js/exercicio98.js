const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos", "Gabriella", "Feliciano", "Bernadete", "Wanderley", "Zizu"];

const filtrarNomes = array => array.filter(str => str.toLowerCase().includes('z'));

console.log(filtrarNomes(nomes));