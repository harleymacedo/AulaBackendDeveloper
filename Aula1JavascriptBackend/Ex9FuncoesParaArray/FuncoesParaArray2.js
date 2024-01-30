//Uso da função map
var studios = ['Warner Bros', '21 Century', 'Sony']
var quantidades = studios.map( (valor) => { 
    console.log(valor.length) 
    return valor.length
})
console.log(quantidades)

//Uso da função reduce
var numeros = [8, 9, 4, 5, 9, 9]
var soma = numeros.reduce( (total, numero) => { 
    console.log(total, numero)
    return total + numero 
})
console.log(soma)
