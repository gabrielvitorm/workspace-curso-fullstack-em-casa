const calcular = () =>{
    const array = document.getElementById("numeros").value.split(",").map(num => parseFloat(num.trim())).sort((a,b) => a - b);
    const media = array.reduce((acc, val) => acc + val, 0)/array.length;
    const meio = Math.floor(array.length/2);
    const mediana = array.length % 2 === 0 ? (array[meio - 1] + array[meio]) / 2 : array[meio];
    const contagem = {}
    array.forEach(n => contagem[n] = (contagem[n] || 0) + 1);
    const maxFreq = Math.max(...Object.values(contagem))
    const moda = Object.keys(contagem).filter(k => contagem[k] === maxFreq).join(", ")
    document.getElementById("resultado").innerText = `Média: ${media.toFixed(2)}, Mediana: ${mediana}, Moda: ${moda}`
}