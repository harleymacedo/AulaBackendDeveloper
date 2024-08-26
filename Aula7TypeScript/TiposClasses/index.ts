class Person {
    private name: string = 'Ana';

    public getName(): string {
        return this.name;
    }
}

let p1 = new Person();
const nome = p1.getName();

//Modificador de acesso e construtor
class Car {

    private brand: string;
    private model: string;

    public constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
    }
}

const car1 = new Car('Nissan', 'Sentra');