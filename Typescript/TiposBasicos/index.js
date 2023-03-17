var car = {
    type: 'Toyota',
    model: 'Corolla',
    year: 2009
};
var car2 = {
    type: 'Toyota'
};
car2.mileage = 2000;
//Data type Enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 1] = "North";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["West"] = 4] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.West);
