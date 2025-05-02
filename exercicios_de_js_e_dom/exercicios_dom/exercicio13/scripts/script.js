const ordenarNumeros = () => {
    const numeros = document.getElementById("numeros").value;
    const mensagem = document.getElementById("mensagem")

    const listaOrdenada = numeros.split(',').map(num => parseFloat(num.trim())).sort((a, b) => a - b);

    mensagem.innerHTML = `Ordenado: ${listaOrdenada.join(", ")}`
}