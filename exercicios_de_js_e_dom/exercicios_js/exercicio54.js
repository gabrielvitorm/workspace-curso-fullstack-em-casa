const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const nomesIniciadosPorB = array => array.filter(str => str.toLowerCase().startsWith('b'));

console.log(nomesIniciadosPorB(nomes));