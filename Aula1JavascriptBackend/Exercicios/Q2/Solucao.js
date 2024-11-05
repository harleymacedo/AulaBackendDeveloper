//Questão 2, número de vogais
function numVogais (texto) {
    let qtdVogais = 0
    let qtdCaracteres = texto.length
    let arrayVogais = ['a', 'e', 'i', 'o', 'u']
    for (i = 0; i < qtdCaracteres; i++) {        
        if (arrayVogais.includes(texto.charAt(i))) qtdVogais++
    }
    return qtdVogais
}

let texto1 = 'Lorem ipsum'
console.log(numVogais(texto1))