var notasAluno = [4,5,9];
var statusAluno;

const calcularMediaAluno = () =>{
    let mediaAluno = (notasAluno[0] + notasAluno[1] + notasAluno[2])/notasAluno.length;
    return mediaAluno;
}

if (calcularMediaAluno() >= 7) {
    statusAluno = "APROVADO";
}else{
    statusAluno = "REPROVADO";
}

    console.log(`Primeira nota: ${notasAluno[0]}\nSegunda nota: ${notasAluno[1]}\nTerceira nota: ${notasAluno[0]}\nA média do aluno é: ${calcularMediaAluno()}\nO aluno está: ${statusAluno}`);