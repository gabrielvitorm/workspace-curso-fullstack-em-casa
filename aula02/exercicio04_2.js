var aluno = {
    nome: "Gabriel",
    cpf: "999.999.999-99",
    cidade: "João Pessoa"
};
var notasAluno = [5,7,8,10];

var notaAleatoria = notasAluno[Math.floor(Math.random() * notasAluno.length)]

const calcularMediaAluno = () =>{
    let mediaAluno = (notasAluno[0] + notasAluno[1] + notasAluno[2] + notasAluno[3])/notasAluno.length;
    return mediaAluno;
}

const converterEscala = () =>{
    let notaConvertida = notaAleatoria*10;
    return notaConvertida;
}

console.log(`Nome: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}\nA primeira nota do aluno foi: ${notasAluno[0]}\nA segunda nota do aluno foi: ${notasAluno[1]}\nA terceira nota do aluno foi: ${notasAluno[2]}\nA quarta nota do aluno foi: ${notasAluno[3]}\nA média do aluno foi: ${calcularMediaAluno().toFixed(2)}\nA nota sorteada foi: ${notaAleatoria} e convertida para a escala de 0-100 é: ${converterEscala()}`);

