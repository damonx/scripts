const fs = require('fs');

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got value: ${value}`)); // 15

function readTextFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            throw err;   // or handle error differently
        }
        callback(data);
    });
}

function textFile(filename) {
    return new Promise(resolve => {
        readTextFile(filename, text => resolve(text));
    });
}

textFile("plans.txt").then(console.log);

function jsonFile(filename) {
  return textFile(filename).then(JSON.parse);
}

jsonFile("package.json").then(console.log);