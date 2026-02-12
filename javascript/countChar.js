function countCharRecursively(str, ch) {
  // Base case: empty string
  if (str.length === 0) {
    return 0;
  }

  // Check first character
  let first = str[0] === ch ? 1 : 0;

  // Recursive call on the rest of the string
  return first + countCharRecursively(str.slice(1), ch);
}

function countBsRecursively(str) {
  return countCharRecursively(str, "B");
}

console.log("Count Bs recursively: " + countBsRecursively("BOB"));
// → 2
console.log("Count char recursively: " + countCharRecursively("kakkerlak", "k"));
// → 4

let countChar = function (str, ch) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count++;
    }
  }

  return count;
}

let countBs = function (str) {
  return countChar(str, "B");
}

console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
