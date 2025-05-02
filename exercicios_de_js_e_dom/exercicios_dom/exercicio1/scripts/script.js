const calcularMedia = ()=>{
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    const resultado = document.getElementById("resultado");
    const media = (nota1 + nota2 + nota3 + nota4)/4;
    const status = media >= 7 ? "Aprovado" : "Reprovado";
    resultado.innerHTML = `Média: ${media.toFixed(1)} - ${status}`;
}