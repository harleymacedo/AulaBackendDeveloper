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

module.exports = professorRouter;