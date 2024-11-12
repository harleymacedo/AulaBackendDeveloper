
const { readFile } = require('fs/promises')

async function lerDados() {
    const data = await readFile('Enunciado.txt')
    console.log(data.toString())
}

lerDados()