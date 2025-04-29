const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21, 15, 7, 5, 3];

const filtrarNumeros = array => array.filter(num => num < 30);

const filtrarNumeros2 = (array) => {
    let numerosFiltrados = array.filter(num => num < 30);
    return numerosFiltrados;
}

function filtrarNumeros3(array){
    let numerosFiltrados = array.filter(num => num < 30);
    return numerosFiltrados;
}

console.log(filtrarNumeros(numeros));
console.log(filtrarNumeros2(numeros));
console.log(filtrarNumeros3(numeros));