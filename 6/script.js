// // 
// function isSymbolPresentInString(str, symbol) {
//     const letter = 0;
//     for (const letter of str) {
//         if (letter === symbol) {
//             return true
//         }
//     }
//     if(letter !== undefined){
//         return false
//     }
// }
// const str = "abc";
// const symbol = "c"
// console.log(isSymbolPresentInString(str, symbol))



// function getSymbolIndex(str1, symbol1) {
//     for (let i = 0; i < str1.length; i++) {
//         if (str1[i] === symbol1) {
//             return i;
//         }
//     }
//     return -1;
// }

// const str1 = "hello lol"
// const symbol1 = "o"

// console.log(getSymbolIndex(str1, symbol1))


//forEach:
const numbers = ["one", "two", "tree", "four", "five"]

function forEach(array, callback) {
    for (let b = 0; b < array.length; b++) {
        callback(array[b]);
    }
  };
  
  forEach(numbers, arrayOutput => console.log(arrayOutput));


//map:
const arr = [1, 2, 3, 4, 5]
function map(array, callback) {
  let bufferArray = [];
  for (let n = 0; n < array.length; n++) {
      bufferArray.push(callback(array[n], n));
  }
  return bufferArray;
};

let resultArray = map(arr, arrayOutput => arrayOutput);
console.log(resultArray);

//filter:
function filter(array, callback) {
  let bufferArray = [];
  for (let m = 0; m < array.length; m++) {
      if (callback(array[m], m, array)) {
          bufferArray.push(array[m]);
      }
  }

  return bufferArray;
};

console.log(filter(arr, item => item >= 3));

//every:
function every(array, callback) {0
  for (let s = 0; s < array.length; s++) {
      if(callback(array[s], array)) return true;
  }
  return false;
};

console.log(every(arr, item => item === 6));

//some:
function some(array, callback) {
  for (let d = 0; d < array.length; d++) {
      if(callback(array[d], array)) return true;
  }
  return false;
};

console.log(some(arr, item => item === 6));