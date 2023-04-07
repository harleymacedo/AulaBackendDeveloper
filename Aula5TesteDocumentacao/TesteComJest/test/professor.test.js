const axios = require('axios');

test('GET /professor/todos', async () => {
    const result = await axios.get('http://localhost:3000/professor/todos');
    expect(result.data).toBeTruthy();
    expect(result.data.length).toBeTruthy();
});