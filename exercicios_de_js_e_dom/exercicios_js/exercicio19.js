const numeros = [10,4,3,6,8,11];

const menorNumero = (array)=>{
    return Math.min(...array);
}

console.log(menorNumero(numeros));