//Imports gerais
const axios = require('axios')

//Verificar se foi retornado algum dado válido
//Verficicar se foi o tamanho do dado é maior que 0
test('GET /professor/todos', async () => {
    const result = await axios.get('http://localhost:3000/professor/todos')
    expect(result.data.professores).toBeTruthy()
    expect(result.data.professores.length).toBeTruthy()
})

//Verificar se é retornado algum professor
//Verificar se o nome do professor é truable
test('GET /professor/nome/:nome', async () => {
    const result = await axios.get('http://localhost:3000/professor/nome/Ana')
    expect(result.data.professor).toBeTruthy()
    expect(result.data.professor.nome).toBeTruthy()
})

//Verificar se o professor Marcos foi deletado
test('DELETE /professor', async () => {
    await axios.delete('http://localhost:3000/professor/nome/Marcos')
    const result = await axios.get('http://localhost:3000/professor/nome/Marcos')
    expect(result.data.professor).not.toBeTruthy()
})

//Verificar se o professor Matheus foi incluído
test('POST /professor', async () => {
    await axios.post('http://localhost:3000/professor', {
        "nome": "Matheus",
        "area": "Gerência de projetos"
    })
    const result = await axios.get('http://localhost:3000/professor/nome/Matheus')
    expect(result.data.professor).toBeTruthy()
    expect(result.data.professor.nome).toBeTruthy()
})

//Verifica se o professor Matheus teve sua área alterada
test('PUT /professor', async () => {
    await axios.put('http://localhost:3000/professor', {
        "nome": "Matheus",
        "area": "Gerência de projetos 2"
    })
    const result = await axios.get('http://localhost:3000/professor/nome/Matheus')
    expect(result.data.professor.area).toBe('Gerência de projetos 2')
})
