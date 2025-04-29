const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21];

function numerosMaiores20(array){
    let numerosFiltrados = array.filter(num => num > 20);
    return numerosFiltrados;
}

const numerosMaiores202 = (array) =>{
    let numerosFiltrados = array.filter(num => num > 20);
    return numerosFiltrados;
}

const numerosMaiores203 = array => array.filter(num => num > 20);

console.log(numerosMaiores20(numeros));
console.log(numerosMaiores202(numeros));
console.log(numerosMaiores203(numeros));