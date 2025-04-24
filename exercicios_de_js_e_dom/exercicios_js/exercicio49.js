const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu"];

const ultimaLetraMaiuscula = array => array.map(str => str.slice(0, str.length - 1) + str.charAt(str.length - 1).toUpperCase());

console.log(ultimaLetraMaiuscula(nomes));