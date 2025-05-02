const verificacao = ()=>{
    const numero = parseFloat(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");
    if(numero < 2){
        resultado.innerHTML = `Número ${numero} não é primo`;
        return;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i === 0){
            resultado.innerHTML = `O número ${numero} não é primo`;
            return;
        }
    }
    resultado.innerHTML = `O número ${numero} é primo`;
}