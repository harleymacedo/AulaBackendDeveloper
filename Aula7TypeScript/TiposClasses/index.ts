class Person {
    name: string;
}

const person = new Person();
person.name = 'Jane';

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