const alunos = [
    {
        nome: "Gabriel",
        idade: 22,
        notas: [10,6,8]
    },{
        nome: "Pedro",
        idade: 19,
        notas: [10,6,8]
    },{
        nome: "Marcelo",
        idade: 18,
        notas: [10,6,8]
    }
]

for(aluno of alunos){
    console.log(aluno.nome);
}