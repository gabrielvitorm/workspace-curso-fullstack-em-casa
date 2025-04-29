const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Leonardo", "Felicity", "Benjamin", "Caroline", "Robinson"];

const filtrarNomesCom8Caracteres = array => array.filter(str => str.length === 8);

console.log(filtrarNomesCom8Caracteres(nomes));