function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
}

run();

async function run() {
  for (let i = 1; i <= 3; i++) {
    await delay(1000);
    console.log(i);
  }
}

run();

async function getData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await response.json();
  console.log(data);
}

getData();

async function test() {
  try {
    let result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (err) {
    console.log("Caught:", err);
  }
}

test();

console.log("await can pause execution of an async function, but it doesn't block the whole program.");
async function run() {
  await delay(2000);
  console.log("Finished after 2 seconds");
}

run();
console.log("This runs immediately");