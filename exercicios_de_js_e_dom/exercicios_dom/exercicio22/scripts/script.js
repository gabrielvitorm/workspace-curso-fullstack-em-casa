const ordenarNomes = () => {
    const nomes = document.getElementById("nomes").value.split(",").map(nome => nome.trim()).sort();
    document.getElementById("mensagem").innerText = nomes.join(", ");
}