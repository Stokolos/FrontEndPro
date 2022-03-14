const exampleArr = [1, [2, [3, [4, 5]]]];

function arrSum(array, i = 0) {
    if (isFinite(array)) {
        return Number(array)
    } else if (array == "object" && i < array.length) {
        return arrSum(array[i]) + arrSum(array, i + 1)
    };
    return 0;
}

console.log(arrSum(exampleArr));