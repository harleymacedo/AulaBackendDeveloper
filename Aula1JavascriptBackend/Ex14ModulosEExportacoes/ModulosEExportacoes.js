//Reuso de função em outro arquivo
const robo = require('./Auxiliar')
robo.dizOi()
console.log(robo.nome)

//Obtendo mais de uma variável
const {nomes, cidades} = require('./Auxiliar2')
console.log(nomes, cidades)

// import salas from './Auxilizar3.js'
// console.log(salas)
//"type": "module", (colocar no package.json)