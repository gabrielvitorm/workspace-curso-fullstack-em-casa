const adivinhar = ()=>{
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const numero = parseFloat(document.getElementById("numero").value);
    const resultado = document.getElementById("mensagem");
    if(numero === numeroSecreto){
        resultado.innerHTML = `Você acertou o número!`
        return;
    }else if(numero > numeroSecreto){
        resultado.innerHTML = `Você errou o o número secreto é menor: ${numeroSecreto}`;
        return;
    }else{
        resultado.innerHTML = `Você errou o o número secreto é maior: ${numeroSecreto}`;
        return;
    }
}