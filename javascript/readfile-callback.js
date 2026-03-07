import {readFile} from "node:fs"
readFile("vector.js", "utf-8", (err, text) => {
    if (err) {
        throw err;
    }
    console.log("The file contains: ", text);
});

readFile("vector.js", (err, buffer) => {
    if (err) throw err;
    console.log("The file contained", buffer.length, "bytes.", "The first byte is:", buffer[0]);
});