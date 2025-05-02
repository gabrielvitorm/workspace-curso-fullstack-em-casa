const verificarNumero = () => {
    const numero = parseFloat(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    const pares = [];
    const impares = [];

    for(let i = 0; i <= numero; i++){
        if(i % 2 === 0){
            pares.push(i);
        }else{
            impares.push(i);
        }
    }

    mensagem.innerHTML = `Pares: ${pares}. Impares: ${impares}`;
}