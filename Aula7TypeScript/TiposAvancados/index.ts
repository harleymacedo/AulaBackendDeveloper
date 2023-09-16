
//Interfaces
interface Rectangle {
    height: number,
    width: number
}

const rectangle1: Rectangle = {
    height: 20,
    width: 10
}

//Union types
function printStatusCode(code: string | number) {
    console.log(`My status code is ${code}.`);
}

printStatusCode(404);
printStatusCode('404');
