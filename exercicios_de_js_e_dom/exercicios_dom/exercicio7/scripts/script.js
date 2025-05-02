const fatorarNumero = ()=>{
    const numero = parseFloat(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    let fator = 1;

    if(isNaN(numero) || numero < 0){
        resultado.innerHTML = `Digite um número válido e positivos`;
        return; 
    }

    for(let i = 1; i <= numero; i++){
        fator *= i;
    }

    resultado.innerHTML = `O fatorial de ${numero} é ${fator}`;
}