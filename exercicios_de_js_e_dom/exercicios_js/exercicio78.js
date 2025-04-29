const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const filtrarNomesComI = array => array.filter(str => str.toLowerCase().includes("i"));

console.log(filtrarNomesComI(nomes));