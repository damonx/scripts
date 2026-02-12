let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping

console.log(String(6).padStart(3, "0"));
// → 006

console.log("  okay \n ".trim());
// → okay

console.log("one two three".indexOf("ee"));
// → 11

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));
// → 5

console.log("LA".repeat(3));
// → LALALA
