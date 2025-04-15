let botao = document.getElementById("botao");
let headline = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");

const mudaTexto = () =>{
    botao.textContent = 'Cadastro Concluído';
    headline.textContent = 'Parabéns você fez o cadastro!';
    paragrafo.textContent = 'Confira seu email para receber as atualizações'; 
}