const fs = require("fs");

let rawData = fs.readFileSync("config.json", "utf-8");
let config = JSON.parse(rawData);

console.log("Port number read from file is: ", config.port);
