const calcular = () => {
    const taxa = parseFloat(document.getElementById("taxa").value)/100;

    let anos = 0;
    let valor = 1;

    while(valor < 2){
        valor *= 1 + taxa;
        anos++;
    }

    document.getElementById("mensagem").innerText = `Anos para dobrar: ${anos}`
}