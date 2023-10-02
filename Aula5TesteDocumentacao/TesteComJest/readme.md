<h1>Documentação da API</h>

<h3>Login na aplicação</h3>
<p>
    Para utilizar a aplicação, basta ter um email educacional da instituição IFCE
    em seguida, usar este email para se cadastrar em http://www.meuservidor.com/cadastro.
</p>

<h3>Descrição dos endpoints</h3>
<table>
    <thead>
        <th>Endpoint</th> <th>Descrição</th> <th>Retorno</th>
    </thead>
    <tr>
        <td>http://api.meuservidor.com/professor/todos</td>
        <td>Obter uma lista de professores, resposta em JSON, com um array de objetos</td>
        <td>
            <code>
                {
                    "nome": "Ana",
                    "area": "Computação Gráfica"
                }
            </code>
        </td>
    </tr>
    <tr>
        <td>http://api.meuservidor.com/professor/nome/:nome</td>
        <td>Obter um professor específico, resposta em JSON, com um objeto único</td>
    </tr>
</table>

