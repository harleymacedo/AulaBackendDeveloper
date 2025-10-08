const alunos = [
    {nome: 'Ana', cidade: 'Crato'},
    {nome: 'Marcos', cidade: 'Barbalha'},
    {nome: 'Tereza', cidade: 'Crato'},
    {nome: 'Bruna', cidade: 'Juazeiro do Norte'}
]

const alunosCrato = alunos.filter( function (alunoAtual) {
    return alunoAtual.cidade === 'Crato'
} )

const alunoBuscado = alunos.find( function (alunoAtual) {
    return alunoAtual.nome === 'Marcos'
} )

console.log(alunosCrato)
console.log(alunoBuscado)