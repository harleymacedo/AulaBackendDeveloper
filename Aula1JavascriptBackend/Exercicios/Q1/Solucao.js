//Questão 1, sorteio números
function sorteiaNumeros() {
    let array1 = []
    let qtd = 0
    while (qtd < 5) {
        let numSorteado = Math.floor(Math.random() * 80 + 1)
        if (!array1.includes(numSorteado)) {
            array1.push(numSorteado)
            qtd++
        }
    }
    return array1
}

console.log(sorteiaNumeros())