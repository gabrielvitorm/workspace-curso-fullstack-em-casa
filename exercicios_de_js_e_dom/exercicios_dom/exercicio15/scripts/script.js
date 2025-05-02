const verificarNumero = () => {
    const numero = parseFloat(document.getElementById("numero").value);
    let soma = 0;
    for (let i = 0; i < numero; i++){
        if(numero % i === 0){
            soma += i;
        }
    }
    const mensagem = soma === numero ? "É perfeito!" : "Não é perfeito!";
    document.getElementById("mensagem").innerText = mensagem;
}