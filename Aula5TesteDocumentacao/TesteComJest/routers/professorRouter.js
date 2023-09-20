const professorRouter = require('express').Router();

var professores = [
    {nome: 'Ana', area: 'Computação Gráfica'},
    {nome: 'Beatriz', area: 'Engenharia de Software'},
    {nome: 'Marcos', area: 'Banco de dados'}
];

//Rota para obter todos os professores
professorRouter.get('/professor/todos', (req, res) => {
    res.json({"professores": professores});
});

//Rota para obter um professor pelo nome
professorRouter.get('/professor/nome/:nome', (req, res) => {
    const professorBuscado = professores.find( (professor) => {
        return (professor.nome === req.params.nome);
    });
    res.json({"professor": professorBuscado});
});

//Rota para cadastrar um professor
professorRouter.post('/professor', (req, res) => {
    const {nome, area} = req.body;
    professores.push({nome, area});
    res.json({mensagem: "Professor cadastrado"});
});

//Rota para atualizar um professor
professorRouter.put('/professor', (req, res) => {
    const {nome, area} = req.body;
    professores.forEach( (professorAtual) => {
        if (professorAtual.nome === nome) {
            professorAtual.area = area;
        }
    });
    res.json({mensagem: "Professor atualizado"});
});

//Rota para excluir um professor pelo nome
professorRouter.delete('/professor/nome/:nome', (req, res) => {
    const nome = req.params.nome;
    var indice = null;
    professores.forEach( (professorAtual, index) => {   
        if (professorAtual.nome === nome) {
            indice = index;
        }          
    });
    if (indice) {
        professores.splice(indice, 1);
    }
    res.json({mensagem: "Professor excluído"});
});

module.exports = professorRouter;