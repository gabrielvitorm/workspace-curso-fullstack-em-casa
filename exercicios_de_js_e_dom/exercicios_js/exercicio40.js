const numeros = [0,5,9,4,5,6,10,12,7];

const numerosMaioresQueDez = (array) => {
    const numerosFiltrados = array.filter(array => array>10);
    return numerosFiltrados;
}

console.log(numerosMaioresQueDez(numeros));

const numerosMaioresQueDez2 = array => array.filter(num => num>10);

console.log(numerosMaioresQueDez2(numeros));