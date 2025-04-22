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

const nomes = alunos.map(alunos => alunos.nome);

console.log(nomes);