const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const nomesComLetraO = array => array.filter(str => str.includes('o'));

console.log(nomesComLetraO(nomes));