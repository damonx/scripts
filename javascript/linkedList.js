const arrayToList = function (array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;    
}

const listToArray = function (list) {
    let array = [];
    while (list !== null) {
        array.push(list.value);
        list = list.rest;
    }
    return array;
}

function prepend(value, list) {
    return {value, rest: list};
}

function nth(list, n) {
    if (list === null) return undefined;
    else if (n === 0) return list.value;
    else return nth(list.rest, n - 1);
}

function nthInteration(list, n) {
  let index = 0;

  while (list !== null) {
    if (index === n) return list.value;
    list = list.rest;
    index++;
  }

  return undefined;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
