const professorRouter = require('express').Router();

var professores = [
    {nome: 'Ana', area: 'Computação Gráfica'},
    {nome: 'Harley', area: 'Programação Web'},
    {nome: 'Yuri', area: 'Banco de dados'}
];

professorRouter.get('/professor/todos', (req, res) => {
    res.json({"professores": professores});
});

professorRouter.get('/professor/nome/:nome', (req, res) => {
    const professorBuscado = professores.find( (professor) => {
        return (professor.nome === req.params.nome);
    });
    res.json({"professor": professorBuscado});
});

professorRouter.post('/professor', (req, res) => {
    const {nome, area} = req.body;
    professores.push({nome, area});
    res.json({mensagem: "Professor cadastrado"});
});

professorRouter.put('/professor', (req, res) => {
    const {nome, area} = req.body;
    professores.forEach( (professorAtual) => {
        if (professorAtual.nome === nome) {
            professorAtual.area = area;
        }
    });
    res.json({mensagem: "Professor atualizado"});
});

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
    console.log("Deletar foi chamadado, array atual: ");
    console.log(professores);
    console.log(nome);
    res.json({mensagem: "Professor excluído"});
});

module.exports = professorRouter;