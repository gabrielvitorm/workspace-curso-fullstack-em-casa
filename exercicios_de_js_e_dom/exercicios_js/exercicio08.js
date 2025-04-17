const notas = [4,5,8];

const calcularMedia = ()=>{
    let mediaAluno = (notas[0] + notas[1] + notas[2])/notas.length;
    return mediaAluno;
}

const verificarSituacaoDoAluno = ()=>{
    
    let status;

    if(calcularMedia() >= 7){
        status = "APROVADO";
        console.log(`O aluno está: ${status}`);
    }else{
        status = "REPROVADO";
        console.log(`O aluno está: ${status}`);
    }
}

console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A primeira nota do aluno é: ${notas[1]}`);
console.log(`A primeira nota do aluno é: ${notas[2]}`);
console.log(`A Média do aluno é: ${calcularMedia().toFixed(2)}`);
verificarSituacaoDoAluno();