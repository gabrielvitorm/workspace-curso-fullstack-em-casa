const numeros = [10, 32, 45, 67, 89, 90, 103, 81, 49, 21];

const numerosDecrementados = array => array.map(num => num - 2);

const numerosDecrementados2 = (array) =>{
    let numerosDecrementados = array.map(num => num - 2);
    return numerosDecrementados;
}

function numerosDecrementados3(array){
    let numerosDecrementados = array.map(num => num - 2);
    return numerosDecrementados;
}

console.log(numerosDecrementados2(numeros));

console.log(numerosDecrementados3(numeros));

console.log(numerosDecrementados(numeros));