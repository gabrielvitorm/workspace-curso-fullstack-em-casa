const verificarNumeros = () => {
    const numeros = document.getElementById("numeros").value.split(',').map(num => parseFloat(num.trim()));
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);
    document.getElementById("mensagem").innerHTML = `O maior ${maior}. O menor ${menor}`;
}