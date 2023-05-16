//Tipo array
const names: string[] = [];
names.push("Dylan");
//names.push(3);

//Tipagem por inferência
const numbers = [1, 2, 3]; //tipo definido como number[]
numbers.push(4); //sem erro
//numbers.push("2"); //com erro

//Tupla definida
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Exemplo de tupla']; //Inicialização correta
