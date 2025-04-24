const numeros = [0,5,9,4,5,6,10,12,7];

const transformarNumeros = (array) =>{
    const numerosTranformados = array.map(array => array.toFixed(2));
    return numerosTranformados;
}

console.log(transformarNumeros(numeros));

