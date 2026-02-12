function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));

// You can use a similar three-dot notation to call a function with an array of arguments.
let numbers = [5, 1, 7];
console.log(max(...numbers));
// → 7

let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// → ["will", "never", "fully", "understand"]

//This works even in curly brace objects, where it adds all properties from another object. 
// If a property is added multiple times, the last value to be added wins:
let coordinates = {x: 10, y: 0};
console.log({...coordinates, y: 5, z: 1});
// → {x: 10, y: 5, z: 1}
