function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
function multiply(a, b) {
    return a * b;
}
function add(a, b, c) {
    return a + b + (c || 0);
}
function pow(value, expoent) {
    if (expoent === void 0) { expoent = 10; }
    return Math.pow(value, expoent);
}
var x = 'Hello';
console.log(x.length);
