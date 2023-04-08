const axios = require('axios');

test('GET /professor/todos', async () => {
    const result = await axios.get('http://localhost:3001/professor/todos');
    expect(result.data.professores).toBeTruthy();
    expect(result.data.professores.length).toBeTruthy();
});

test('GET /professor/nome/:nome', async () => {
    
});