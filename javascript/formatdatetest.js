const {formatDate} = require("./format-date.js");

console.log(formatDate(new Date(), "dddd the Do"));
console.log(formatDate(new Date(), "dddd the Do of MMMM, YYYY"));
// → Friday the 13th