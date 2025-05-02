const verificarPalavra = () =>{
    const mensagem = document.getElementById("mensagem");
    const palavra = document.getElementById("palavra").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const invertido = palavra.split('').reverse().join('');

    if(palavra === invertido){
        mensagem.innerHTML = `A palavra é um Palíndromo: ${palavra} = ${invertido}`;
        return;
    }else{
        mensagem.innerHTML = `A palavra não é um Palíndromo: ${palavra} = ${invertido}`;
        return;
    }
}