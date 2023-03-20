var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'Jane';
//Modificador de acesso e construtor
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    return Car;
}());
var car1 = new Car('Nissan', 'Sentra');
