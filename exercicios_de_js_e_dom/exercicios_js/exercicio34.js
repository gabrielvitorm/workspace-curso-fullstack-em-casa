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
        idade: 16,
        notas: [10,6,8]
    }
]

const mediaIdades = alunos.reduce((acc,aluno)=> acc + aluno.idade, 0)/alunos.length;

console.log(mediaIdades);