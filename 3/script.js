// Задание № 1
let r = +" ";
for (let i = 10; i <= 20; i++) {
    r = r + i + ","
}
console.log(r)

// Задание № 2
let e = +" "
for (let j = 10; j <= 20; j++) {
    a = j ** 2
    e = e + a + " "
}
console.log(e)

// Задание № 3
for (let s = 1; s <= 10; s++) {
    console.log(s + "*" + 7 + "=" + (s * 7))
}

// Задание № 4
let sum = 0;
for (var c = 0; c <= 15; c++) {
    sum += c;
}
console.log(sum)

// Задание № 5
let sume = 1;
for (var iv = 15; iv <= 35; iv++) {
    sume *= iv;
}
console.log(sume)

// Задание № 6
let ze = 0;
for (let zer = 0; zer <= 500; zer++) {
    ze += zer / 2
}
console.log(ze)

// Задание № 7
let bt = 0;
for (let nu = 30; nu <= 80; nu++) {
    if (nu % 2 === 0) {
        bt += nu
    }
}
console.log(bt);

// Задание № 8
let sr = 0;
let rs = " ";
for (let rt = 100; rt <= 200; rt++) {
    if (rt % 3 === 0) {
        rs = rs + rt + " "
    }
}
console.log(rs)

// Задание № 9
let oneNum = 0;
let twoNum = 0;
for (let ij = 1; ij <= 100; ij++) {
    if (100 % ij == 0) {
      console.log(ij);

        if (ij % 2 == 0)
        {
            oneNum++;
            twoNum += ij;
        }
    }
}
console.log("Кол-во четных делителей переменной: ", oneNum);
console.log("Сумма четных делителей переменной: ", twoNum);

// Задание № 10
for (let j = 1; j <= 9; j++) {
    for (let i = 1; i <= 10; i++) {
        console.log(i + "*" + j + "=" + (i * j));
    }
} 


// Задание № 11
let userNumb;
let numbRand = Math.ceil(Math.random() * 10);

do {
    userNumb = prompt("Угадайте число от 1 до 10");
    if (userNumb == numbRand) {
        alert("Угадал");
    } else if (userNumb == null) {
        alert("Пока!");
    } else if (userNumb < numbRand) {
        alert("Мало, попробуй больше!");
    } else if (userNumb > numbRand) {
        alert("Много, попробуй меньше!");
    }
} while (userNumb != numbRand && userNumb)

// Задание № 12
let str = "*";
let line = +prompt("Введите число")
while (str.length <= line) {
    console.log(str);
    str += "*";
}
 