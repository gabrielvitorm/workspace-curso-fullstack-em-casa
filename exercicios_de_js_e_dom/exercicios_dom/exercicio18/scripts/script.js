const calcularValor = () => {
    const precos = document.getElementById("produtos").value.split(",").map(num => parseFloat(num.trim()));
    const total = precos.reduce((acc, val) => acc + val, 0);
    const final = total > 100 ? total * 0.9 : total;
    document.getElementById("mensagem").innerText = `Total: R$ ${final.toFixed(2)}`
}