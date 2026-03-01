function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  let p1 = delay(1000);
  let p2 = delay(1000);

  await p1;
  await p2;

  console.log("Done");
}

// await delay(1000);
// await delay(1000);

run()