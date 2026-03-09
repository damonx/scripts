// import {createServer} from "node:http";
// createServer((request, response) => {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   request.on("data", chunk =>
//     response.write(chunk.toString().toUpperCase()));
//   request.on("end", () => response.end());
// }).listen(8000);

import { createServer } from "node:http";

createServer((request, response) => {
  let body = "";

  request.on("data", chunk => {
    body += chunk;
  });

  request.on("end", () => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(body.toUpperCase());
  });

  request.on("error", err => {
    console.error(err);
    response.statusCode = 500;
    response.end("Server error");
  });

}).listen(8000).on("listening", () => {
  console.log("Server is listening on port 8000");
});