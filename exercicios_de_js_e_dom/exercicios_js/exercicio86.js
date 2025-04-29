const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos", "Darius"];

const filtrarNomes = array => array.filter(str => str.toLowerCase().startsWith('d'));

console.log(filtrarNomes(nomes));