import { readFile } from "fs/promises";

async function textFile(fileName) {
  return await readFile(fileName, "utf8");
}

async function fileSizes(files) {
  let lines = files.map(async fileName => {
    return fileName + ": " +
      (await textFile(fileName)).length;
  });
  return (await Promise.all(lines)).join("\n");
}

console.log(await fileSizes(["varlet.js", "scripts.js"]));