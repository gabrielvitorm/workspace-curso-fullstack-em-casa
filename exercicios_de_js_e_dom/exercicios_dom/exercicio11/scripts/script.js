const sequencia = ()=>{
    const numero = parseFloat(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    let sequencia = [0,1];

    while(sequencia[sequencia.length -1] + sequencia[sequencia.length - 2] <= numero){
        sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2])
    }

    mensagem.innerHTML = `${sequencia.join(', ')}`;
}