
function AnaliseNotas (notas) { 
    let aprovados = 0
    let reprovados = 0
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] >= 7) {
            aprovados++
        } else {
            reprovados++
        }
    }
    console.log(`Aprovados: ${aprovados}`)
    console.log(`Reprovados: ${reprovados}`)
}

//Usando a função
let notas = [10, 8, 7, 9, 6, 5, 4, 3, 2, 1]
AnaliseNotas(notas)