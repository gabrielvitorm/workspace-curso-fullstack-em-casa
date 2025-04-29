const nomes = ["GABRIEL", "ANA", "PEDRO", "RAFAEL", "ROMARIO", "IRINEU", "AMANDA", "HUGO", "BABU"];

const nomesModificados = array => array.map(str => str.charAt(0).toLowerCase() + str.slice(1, -1) + str.slice(-1).toLowerCase());

console.log(nomesModificados(nomes));