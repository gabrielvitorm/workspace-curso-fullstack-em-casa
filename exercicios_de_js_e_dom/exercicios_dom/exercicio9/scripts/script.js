const filtrarTexto = () =>{
    const mensagem = document.getElementById("mensagem");
    const texto = document.getElementById("texto").value.toLowerCase();
    const vogais = texto.match(/[aeiou]/g) || [];
    const consoantes = texto.match(/[bcdfghjklmnpqrstvwxyz]/g) || [];

    mensagem.innerHTML = `O texto tem ${vogais.length} vogais e ${consoantes.length} consoantes`;
}