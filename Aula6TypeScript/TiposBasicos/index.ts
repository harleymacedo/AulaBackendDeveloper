//Tipos primitivos
var a: string;
a = 'Ana';

var b: number = 10;
b = 20;


const car: {type: string, model: string, year: number} = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
}

const car2: {type: string, mileage?: number} = {
    type: 'Toyota'
}

car2.mileage = 2000;

//Data type Enum
enum CardinalDirections {
    North = 1,
    East,
    South,
    West
}

console.log(CardinalDirections.West);