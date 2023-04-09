const axios = require('axios');

test('GET /professor/todos', async () => {
    const result = await axios.get('http://localhost:3001/professor/todos');
    expect(result.data.professores).toBeTruthy();
    expect(result.data.professores.length).toBeTruthy();
});

test('GET /professor/nome/:nome', async () => {
    const result = await axios.get('http://localhost:3001/professor/nome/Ana');
    expect(result.data.professor).toBeTruthy();
    expect(result.data.professor.nome).toBeTruthy();
});

test('POST /professor', async () => {
    await axios.post('http://localhost:3001/professor', {
        "nome": "Matheus",
        "area": "Gerência de projetos"
    });
    const result = await axios.get('http://localhost:3001/professor/nome/Ana');
    expect(result.data.professor).toBeTruthy();
    expect(result.data.professor.nome).toBeTruthy();
});

// test('PUT /professor', asy)