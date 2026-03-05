// Macrotask > Microtask > Synchronous code
// therefore the result will be:
// Start
// End
// Promise
// Timeout
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");