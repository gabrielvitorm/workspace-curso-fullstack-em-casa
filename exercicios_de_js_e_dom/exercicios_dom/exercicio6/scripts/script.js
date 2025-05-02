const verificarNomes = ()=>{
    const nomes = document.getElementById("nomes").value.split(',').map(str => str.trim());
    const resultado = document.getElementById("resultado");
    let maior = nomes[0];
    let menor = nomes[0];
    nomes.forEach(nome => {
        if (nome.length > maior.length){
            maior = nome;
        }
        if (nome.length < menor.length){
            menor = nome;
        }
    })
    resultado.innerHTML = `O maior nome é: ${maior}\nO menor nome é: ${menor}`;
}