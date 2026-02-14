const reverseArrayPush = function (array) {
    let result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}
console.log("Reverse array push: ", reverseArrayPush([1,2,3,4]));

const reverseArrayUnshift = function (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.unshift(array[i]);
    }
    return result;
}
console.log("Reverse array unshift: ", reverseArrayUnshift([1,2,3,4]));

const reverseArrayRecursive = arr => 
  arr.length <= 1 ? arr : [arr.pop()].concat(reverseArrayRecursive(arr));
console.log("Reverse array recursively: ", reverseArrayRecursive([1,2,3,4]));


