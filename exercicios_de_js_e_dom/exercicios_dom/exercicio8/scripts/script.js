const lancarDados = () =>{
    const headline = document.getElementById("headline");
    const dado1 = Math.floor(Math.random() * 6) + 1;
    const dado2 = Math.floor(Math.random() * 6) + 1;
    let soma = dado1 + dado2;
    document.getElementById("resultado").innerHTML = `Dado 1: ${dado1}\nDado 2: ${dado2}\nsoma: ${soma}`;
    headline.innerHTML = `Dados foram Lançados...`;
}