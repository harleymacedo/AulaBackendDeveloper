//Atributo lehngth
var estados = ['Ceará', 'São Paulo', 'Minas Gegais'];
console.log(estados.length);

//Função sort()
var frutas = ['Abacate', 'Manga', 'Laranja', 'Banana'];
frutas.sort();
console.log(frutas);

//Função forEach()
var disciplinas = ['BD1', 'BD2', 'PSW1', 'PSW2'];
disciplinas.forEach( (valor, indice) => {
    console.log(`Valor: ${valor} - Indice: ${indice}`);
});

//Função map()