var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Ana';
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var p1 = new Person();
var nome = p1.getName();
//Modificador de acesso e construtor
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return Car;
}());
var car1 = new Car('Nissan', 'Sentra');
