const numeros = [10,4,3,6,8,11];

const mediaNumeros = (array)=>{
    const soma = array.reduce((acc, n) => acc + n, 0);
    return soma/array.length;
}

console.log(mediaNumeros(numeros));