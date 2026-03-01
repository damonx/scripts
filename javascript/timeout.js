// console.log("Start");

// setTimeout(() => {
//   console.log("Timeout");
// }, 5000);

// console.log("End");

function withTimeout(promise, time) {
  return new Promise((resolve, reject) => {
    promise.then(resolve, reject);
    setTimeout(() => reject("Timed out"), time);
  });
}

withTimeout(fetch("https://www.spark.co.nz"), 3000)
  .then(console.log)
  .catch(console.error);

async function run() {
  try {
    const response = await withTimeout(fetch("https://www.skinny.co.nz"), 3000);
    const text = await response.text();
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

run();