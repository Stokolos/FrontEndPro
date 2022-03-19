function makeCounter() {
    let count = 0;
    return function (x) {
        return count += x;
    };
}

let sum = makeCounter();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));