function getTime(): number {
    return new Date().getTime();
}

//Optional parameters
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

//Default parameters
function pow(value: number, expoent: number = 10) {
    return value ** expoent;
}