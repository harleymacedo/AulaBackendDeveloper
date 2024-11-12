//Q3, barra de progresso
function barraProgresso() {
    let segundos = (new Date()).getSeconds()
    segundos--
    let barra = '|'
    for (i = 0; i < segundos; i++) {
        barra += '*'
    }
    let diferenca = 59 - segundos
    for (j = 0; j <= diferenca; j++) {
        barra += '_'
    }
    barra += '|'
    console.log(barra, segundos)
}

barraProgresso()