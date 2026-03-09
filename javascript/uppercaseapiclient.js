import {createServer} from "node:http";

fetch("http://localhost:8000/", {
  method: "POST",
  body: "Hello server"
}).then(resp => resp.text()).then(console.log);
// → HELLO SERVER