const conversor = () =>{
    const mensagem = document.getElementById("mensagem");
    const numero = parseFloat(document.getElementById("numero").value);
    const binario = numero.toString(2);

    mensagem.innerHTML = `Binário = ${binario}`;
}