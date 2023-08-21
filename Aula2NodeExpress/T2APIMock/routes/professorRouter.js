//Importando o objeto Router
const professorRouter = require('express').Router()

//Dados mockados, para simular um banco de dados
var professores = [
    {nome: 'Marcos', area: 'Banco de dados'},
    {nome: 'Ana', area: 'UX Design'},
    {nome: 'Hugo', area: 'Programação'},
    {nome: 'Diego', area: 'Inteligência artificial'},
    {nome: 'Maria', area: 'Programação'},
    {nome: 'Hugo', area: 'Engenharia de software'},
    {nome: 'Danilo', area: 'Programação web e mobile'},
    {nome: 'Yolanda', area: 'Engenharia de software'},
]

//Rota para obter todos os professores
professorRouter.get('/professor/todos', (req, res) => {
    try {
        res.json(professores)
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'})
    }
})

//Rota para obter um professor através do nome
professorRouter.get('/professor/:nome', (req, res) => {
    try {
        const professorEncontrado = professores.find( (item) => {
            return item.nome === req.params.nome
        });
        res.json(professorEncontrado)
    } catch (error) {
        res.json({erro: true, mensagem: 'Não foi possivel recuperar os dados.'})
    }
})

//Rota para adicionar um novo professor
professorRouter.post('/professor', (req, res) => {
    try {
        const novoProfessor = {nome: req.body.nome, area: req.body.area}
        professores.push(novoProfessor);
        res.json({mensagem: 'Professor cadastrado com sucesso'})
    } catch (error) {
        res.json({mensagem: 'Erro durante o cadastro', erro: true})
    }
})

//Rota para alterar um professor
professorRouter.put('/professor', (req, res) => {
    try {
        professores.forEach( (objetoAtual) => {
            if (objetoAtual.nome === req.body.nome) {
                objetoAtual.area = req.body.area
            }
        })
        res.json({mensagem: 'Professor atualizado com sucesso'})
    } catch (error) {
        res.json({mensagem: 'Erro durante a atualização', erro: true})
    }
})

//Rota para excluir um professor
professorRouter.delete('/professor', (req, res) => {
    try {
        professores = professores.filter( (objetoAtual) => {
            return (objetoAtual.nome !== req.body.nome)
        });
        res.json({mensagem: 'Professor excluído com sucesso'})
    } catch (error) {
        res.json({mensagem: 'Erro durante a exclusão', erro: true})
    }
})

module.exports = professorRouter