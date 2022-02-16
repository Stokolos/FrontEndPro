function arr(exampleArr) {
    const arr1 = exampleArr.flat(3)
    return arr1
}
const exampleArr = [1, [2, [3, [4, 5]]]]
const reducer = (first, second) => first + second;
console.log(arr(exampleArr).reduce(reducer));