const fazerTabuada = ()=>{
    const numero = parseFloat(document.getElementById("numero").value);
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "";
    for(let i = 0; i <= 10; i++){
        const item = document.createElement("li");
        item.innerHTML = `${numero} X ${i} = ${numero * i}`;
        mensagem.appendChild(item);
    }
}