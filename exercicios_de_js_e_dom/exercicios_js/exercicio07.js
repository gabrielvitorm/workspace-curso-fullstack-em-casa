const aluno = {
    nome: "Gabriel Chaves",
    cpf: "999.999.999-99",
    cidade: "João Pessoa"
};
const notas = [6,8,10,5];
const notaAleatoria = notas[Math.floor(Math.random() * notas.length)];

const calcularMedia = ()=>{
    let mediaAluno = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;
    return mediaAluno;
}

const converterNotaEscala = ()=>{
    let notaConvertida = notaAleatoria*10;
    return notaConvertida;
}

console.log(`Nome: ${aluno.nome}\nCPF: ${aluno.cpf}\nCidade: ${aluno.cidade}`);
console.log(`1° Nota: ${notas[0]}\n2° Nota: ${notas[1]}\n3° Nota: ${notas[2]}\n4° Nota: ${notas[3]}`);
console.log(`Media: ${calcularMedia().toFixed(2)}`);
console.log(`Nota escolhida: ${notaAleatoria}, convertida para escala 0-100: ${converterNotaEscala()}`);