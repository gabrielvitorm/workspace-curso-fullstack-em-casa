const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda"];

const nomesComE = array => array.filter(nome => nome.includes("e"));

console.log(nomesComE(nomes));