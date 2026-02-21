const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptDirection(question) {
  return new Promise((resolve, reject) => {
    rl.question(question + " ", (result) => {
      result = result.toLowerCase();
      if (result === "left") resolve("L");
      else if (result === "right") resolve("R");
      else reject(new Error("Invalid direction: " + result));
    });
  });
}

async function look() {
  if (await promptDirection("Which way?") === "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

(async () => {
  try {
    console.log("You see", await look());
  } catch (error) {
    console.log("Something went wrong: " + error.message);
  } finally {
    rl.close();
  }
})();
