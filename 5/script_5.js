// // // Задание № 1

function copy(origin) {
    let target = {};
    for (let key in origin) {
        target[key] = origin[key];
    }
    console.log(target)
    return target;
};

const origin = {
    email: "zpcity2014@gmail.com",
    firstName: "Pavel",
    lastName: "Voronov"
};

console.log(copy(origin))

// // Задание № 2

function compare(obj1, obj2) {

    if (obj1 === obj2) {
        return true;
    } else {
        if (Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        for (const prop in obj1) {
            if (obj1[prop].valueOf() !== obj2[prop].valueOf()) {

                return false;
            }
        }
    }
    return true;
}
const obj1 = {
    mail: "zpcity2014@gmail.com",
    firstName: "Pavel",
    lastName: "Voronov"
}
const obj2 = {
    mail: "zpcity2014@gmail.com",
    firstName: "Pavel",
    lastName: "Voronov"
}
console.log(compare(obj1, obj2))

// Задание № 3

function stringLetter(str) {
    const result = {};
    for (const letter of str) {
      if (result[letter] === undefined) {
        result[letter] = 1;
      } else {
        const count = result[letter];
        result[letter] = count + 1;
      }
    }
    return result;
  }
  
  const result = stringLetter("aaabbc");
  console.log(result);
