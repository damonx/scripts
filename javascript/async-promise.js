const fs = require('fs');

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got value: ${value}`)); // 15
fifteen.then(console.log); // 15

function readTextFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            throw err;   // or handle error differently
        }
        callback(data);
    });
}

function textFile(filename) {
  return new Promise((resolve, reject) => {
    readTextFile(filename, (text, error) => {
      if (error) reject(error);
      else resolve(text);
    });
  });
}

// function textFile(filename) {
//     return new Promise(resolve => {
//         readTextFile(filename, text => resolve(text));
//     });
// }
// 读取命令行参数
const filename = process.argv[2];

if (!filename) {
  console.log("Usage: node async-promise.js <filename>");
  process.exit(1);
}

textFile(filename)
    .then(console.log)
    .catch(console.error);

function jsonFile(filename) {
  return textFile(filename).then(JSON.parse);
}

jsonFile("package.json").then(console.log);