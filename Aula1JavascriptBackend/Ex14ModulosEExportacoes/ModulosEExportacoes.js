//Reuso de função em outro arquivo
//"type": "commonjs", (colocar no package.json)
const robo = require('./Auxiliar')
robo.dizOi()
console.log(robo.nome)

//Obtendo mais de uma variável
const {nomes, cidades} = require('./Auxiliar2')
console.log(nomes, cidades)
