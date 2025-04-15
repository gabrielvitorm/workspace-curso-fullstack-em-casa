let button = document.getElementById('myButton');
let headline = document.getElementById('headline');

button.addEventListener('click', exibirAlerta = ()=>{
    alert('O botão foi clicado!')
    button.style.color = 'green';
    headline.style.color = 'red';
})