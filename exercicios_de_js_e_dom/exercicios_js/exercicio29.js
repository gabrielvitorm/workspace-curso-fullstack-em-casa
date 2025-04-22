const nomes = ["Ana", "Pedro", "Amanda", "Gabriel", "Chico", "Aquiles"];

const comecaComA = (array)=>{
    return array.filter(s => s.startsWith("A"));
}

console.log(comecaComA(nomes));