let empty = {};
console.log(empty.toString); // → function toString() { [native code] }
console.log(empty.toString()); // → [object Object]

console.log(Object.getPrototypeOf({}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Object.prototype)); // → null
console.log(Object.getPrototypeOf({name: "Damon"}) == Object.prototype); // → true
console.log(Object.getPrototypeOf(Math.max)); // → function() { [native code] }

