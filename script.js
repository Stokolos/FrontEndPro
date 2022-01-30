const r = +prompt("Укажите радиус");

function sCircle(PI, radius) {
    return PI * radius ** 2;
}

const s = sCircle(Math.PI, r);
console.log(s);

function lCircle(PI, r) {
    return 2 * PI * r;
}

const l = lCircle(Math.PI, r);
console.log(l);

const numOne = +prompt("Укажите число первое")
const numTwo = +prompt("Укажите число второе")

function numb (a, b){
    return (a + b) / 2;
}

const mean = numb(numOne, numTwo);
console.log(mean);


const calc = function (a, b, action) {
    switch (String(action)) {
        case "+":
            return +a + +b;
        case "-":
            return +a - +b;
        case "*":
            return +a * +b;
        case "/":
            return +a / +b;
        case "%":
            return +a % +b;
        case "^":
            return +a ^ +b;
        default:
            console.log("Error");
            break;
    }
}

console.log(calc(4, 2, "+"));
console.log(calc(4, 2, "-"));
console.log(calc(4, 2, "*"));
console.log(calc(4, 2, "/"));
console.log(calc(4, 2, "%"));
console.log(calc(4, 2, "^"));
