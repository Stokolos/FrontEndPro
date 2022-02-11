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

function myFunc(objectOne, objectTwo) {
    for (const key1 in objectOne) {
        objectOne[key1] = objectTwo[key1]
        return objectOne === objectTwo
    }


}

const objectOne = {
    firstName: "Pavel",
    lastName: "Voronov",
    mail: "zpcity2014@gmail.com"
};

const objectTwo = {
    firstName: "Pavel",
    lastName: "Voronov",
    mail: "zpcity2014@gmail.com"
};
console.log(myFunc(objectOne, objectTwo))

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
