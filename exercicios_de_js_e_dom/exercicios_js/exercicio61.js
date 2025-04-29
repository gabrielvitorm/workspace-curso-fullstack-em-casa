const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const nomesAlterados = array => array.map(str => str.charAt(0).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase());

console.log(nomesAlterados(nomes));