const somarNumeros = ()=>{
    const numero = parseFloat(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");

    if(isNaN(numero) || numero < 0){
        mensagem.innerHTML = `Digite um número inteiro que não seja negativo`;
        return;
    }
    let soma = 0;
    for(let i = 0; i <= numero; i++){
        soma += i;
    }
    mensagem.innerHTML = `Soma: ${soma}`;
}