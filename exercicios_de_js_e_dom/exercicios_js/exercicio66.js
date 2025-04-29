const nomes = ["Gabriel", "Ana", "Pedro", "Rafael", "Romario", "Irineu", "Amanda", "Hugo", "Babu", "Carlos"];

const nomesIniciadosC = array => array.filter(str => str.toLowerCase().startsWith("c"));

function nomesIniciadosC2(array){
    let nomeFiltrado = array.filter(str => str.toLowerCase().startsWith('c'));
    return nomeFiltrado;
}

console.log(nomesIniciadosC2(nomes));

console.log(nomesIniciadosC(nomes));