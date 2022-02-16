const exampleArr = [1, [2, [3, [4, 5]]]]
const toOneLevelArray = (arr) => arr.reduce((accum, currentVal) =>  accum.concat(Array.isArray(currentVal) ? toOneLevelArray(currentVal) : currentVal), []);
const res = toOneLevelArray(exampleArr);
const reducer = (first,second) => first + second;
console.log(res.reduce(reducer));