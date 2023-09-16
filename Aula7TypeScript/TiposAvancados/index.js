var rectangle1 = {
    height: 20,
    width: 10
};
//Union types
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
