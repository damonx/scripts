import {writeFile} from "node:fs"

writeFile("graffiti.txt", "Node was here -- damonx", err => {
  if (err) console.log(`Failed to write file: ${err}`);
  else console.log("File written.");
});