
function getTime(): number {
    return new Date().getTime();
}

function printHello(): void {
    console.log('Hello!');
}

function multiply(a: number, b: number) {
    return a * b;
}

function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

function pow(value: number, expoent: number = 10) {
    return value ** expoent;
}

let x: unknown = 'Hello';
console.log((x as string).length);

class Person {
    private name: string;

    public getName(): string {
        return this.name;
    }
}