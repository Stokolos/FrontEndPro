/838const origin = {
    boxOne: {
        insideBoxOne: "insideBoxOne",
        insideBoxTwo: "insideBoxTwo"
    },
    boxTwo: "boxTwo",
    boxThree: "boxThree",
    boxFour: [1, 2, 3, 4, 5],
    boxFive: {
        insideInBoxOne: {
            inBoxOne: "inBoxOne",
            inBoxTwo: "inBoxTwo",
            inBoxThree: "inBoxThree"
        },
        insideTheBoxOne: {
            theBoxOne: "TheBoxOne",
            theBoxTwo: "TheBoxTwo",
            theBoxThree: "TheBoxThree"
        }
    }
};

const clone = {};

function isObject(obj) {
    return obj !== null && typeof obj === "object" && !Array.isArray(obj);
};

function copy(clone, origin) {
    for (const key in origin) {
        if (Array.isArray(origin[key])) {
            let bufferArray = [];
            for (const keys of origin[key]) {
                copy(bufferArray, origin[key]);
            }
            clone[key] = bufferArray;
        } else if (isObject(origin[key])) {
            for (const keys in origin[key]) {
                clone[key] = copy({}, origin[key]);
            }
        } else {
            clone[key] = origin[key];
        }
    }
    return clone;
};

copy(clone, origin);

console.log(clone);
console.log(origin);

