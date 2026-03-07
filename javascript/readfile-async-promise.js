import {readFile} from "node:fs/promises";

readFile("vector.js", "utf-8").then(text => {
    console.log("The file contains: ", text);
}).catch(err => {
    console.error("Failed to read file:", err);
});