const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21];

const numerosDivisiveisPor7 = array => array.filter(num => num % 7 === 0);

const numerosDivisiveisPor72 = (array)=>{
    let numerosFiltrados = array.filter(num => num % 7 === 0);
    return numerosFiltrados;
}

function numerosDivisiveisPor73(array){
    let numerosFiltrados2 = array.filter(num => num % 7 === 0);
    return numerosFiltrados2;
}

console.log(numerosDivisiveisPor7(numeros));
console.log(numerosDivisiveisPor72(numeros));
console.log(numerosDivisiveisPor73(numeros));