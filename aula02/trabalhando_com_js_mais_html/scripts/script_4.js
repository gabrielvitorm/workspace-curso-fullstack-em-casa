let button = document.getElementById('button');
var idadeInput = document.getElementById('idadeInput');

button.addEventListener('click', function(event) {
    event.preventDefault();

    let idade = parseInt(idadeInput.value);

    if (!isNaN(idade)) {
        if (idade >= 18) {
            alert("Maior de Idade");
        } else {
            alert("Menor de Idade");
        }
    } else {
        alert("Por favor, digite uma idade válida.");
    }
});