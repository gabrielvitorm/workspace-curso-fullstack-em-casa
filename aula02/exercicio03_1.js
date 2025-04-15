var notasAluno = [5,8,9];

const calcularMediaAluno = () =>{
    let mediaAluno = (notasAluno[0] + notasAluno[1] + notasAluno[2])/notasAluno.length;
    return mediaAluno.toFixed(2);
}

console.log(`Primeira Nota: ${notasAluno[0]}`);
console.log(`Segunda Nota: ${notasAluno[1]}`);
console.log(`Terceira Nota: ${notasAluno[2]}`);
console.log(`Média: ${calcularMediaAluno()}`);
