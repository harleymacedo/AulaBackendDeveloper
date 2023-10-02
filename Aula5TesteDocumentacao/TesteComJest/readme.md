<h3>Documentação da API</h3>

<h2>Descrição dos endpoints</h2>

<table>
    <thead>
        <th>Endpoint</th> <th>Descrição</th>
    </thead>
    <tr>
        <td>http://api.meuservidor.com/professor/todos</td>
        <td>Obter uma lista de professores, resposta em JSON, com um array de objetos</td>
    </tr>
    <tr>
        <td>http://api.meuservidor.com/professor/nome/:nome</td>
        <td>Obter um professor específico, resposta em JSON, com um objeto único</td>
    </tr>
</table>

<h2>Resultado de uma requisição para obter professor</h2>
<code>
    {
        "nome": "Ana",
        "area": "Computação Gráfica"
    }
</code>
