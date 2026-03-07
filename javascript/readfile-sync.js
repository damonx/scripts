import {readFileSync} from "node:fs";

console.log("The file contains: ", readFileSync("vector.js", "utf-8"));