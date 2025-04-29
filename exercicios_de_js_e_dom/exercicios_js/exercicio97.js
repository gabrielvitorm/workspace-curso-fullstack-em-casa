const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos", "Gabriella", "Feliciano", "Bernadete", "Wanderley"];

const modificarNomes = (array) =>{
    let nomesModificados = array.map(str => str.toUpperCase().split('').reverse().join(''));
    return nomesModificados;
}

console.log(modificarNomes(nomes));