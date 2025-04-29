const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos", "Gabriella", "Feliciano", "Bernadete", "Wanderley"];

const triplicarVogais = array => array.map(str => str.replace(/[aeiouAEIOU]/g, v => v.repeat(3)));

console.log(triplicarVogais(nomes));