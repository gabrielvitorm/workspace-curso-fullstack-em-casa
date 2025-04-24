const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const nomesQuatroCaracteres = array => array.filter(str => str.length == 4);

console.log(nomesQuatroCaracteres(nomes));