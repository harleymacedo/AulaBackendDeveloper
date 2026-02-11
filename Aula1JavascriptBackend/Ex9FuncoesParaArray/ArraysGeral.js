let array1 = []
array1[0] = 10
array1[5] = 20
console.log(array1)
console.log(array1.length)

array1.forEach( function (valorAtual) {
    console.log(valorAtual)
} )

for (let i = 0; i <= 5; i++) {
    console.log(array1[i])
}