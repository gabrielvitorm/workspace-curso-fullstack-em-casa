const numeros = [2,5,9,4,5,6,10,12,7];

const numeroAoQuadrado = (array)=>{
    return(array.map(n => n**2));
}

console.log(numeroAoQuadrado(numeros));