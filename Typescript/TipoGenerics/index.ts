function createPair<s, t> (v1: s, v2: t): [s, t] {
    return [v1, v2];
}
console.log(createPair<string, number>('hello', 42));