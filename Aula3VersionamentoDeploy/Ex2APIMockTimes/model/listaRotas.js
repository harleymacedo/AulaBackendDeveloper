const listaRotas = [
    {
        "Rota": "GET /time/todos",
        "Descrição": "Rota get para obter todos os times"
    },
    {
        "Rota": "GET /time/nome/:nome",
        "Descrição": "Rota get para obter um time pelo nome"
    },
    {
        "Rota": "POST /time/inserir",
        "Descrição": "Rota post para inserir um novo time"
    },
    {
        "Rota": "PUT /time/atualizar",
        "Descrição": "Rota put para atualizar um time, pelo nome"
    },
    {
        "Rota": "DELETE /time/excluir",
        "Descrição": "Rota delete para excluir um time, pelo nome"
    }
]

module.exports = listaRotas