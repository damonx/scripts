/**
 * For this reason, using plain objects as maps is dangerous.
 */
let ages = {
  Boris: 39,
  Liang: 22,
  Júlia: 62
};

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in ages);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true

// Correct way to create a map.
let agesObj = Object.create(null);
agesObj.Boris = 39;
agesObj.Liang = 22;
agesObj.Júlia = 62;

console.log(`Júlia is ${ages["Júlia"]}`);
// → Júlia is 62
console.log("Is Jack's age known?", "Jack" in agesObj);
// → Is Jack's age known? false
console.log("Is toString's age known?", "toString" in agesObj);
// → Is toString's age known? false

// even better:
let agesJsMap = new Map();
agesJsMap.set("Boris", 39);
agesJsMap.set("Liang", 22);
agesJsMap.set("Júlia", 62);

console.log(`Júlia is ${agesJsMap.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", agesJsMap.has("Jack"));
// → Is Jack's age known? false
console.log("Is toString's age known?", agesJsMap.has("toString"));
// → false
