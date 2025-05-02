const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const verificarNumero = () => {
    const numero = parseFloat(document.getElementById("numero").value);
    const msg = numero === numeroAleatorio ? "Você acertou" : numero > numeroAleatorio ? "Muito alto" : "Muito baixo";
    document.getElementById("mensagem").innerText = msg;
}