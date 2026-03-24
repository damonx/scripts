// A simple http server in Node.js
import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  // const url = req.url;
  // const method = req.method;
  const {url, method} = req;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enger Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk); 
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
      console.log("provided message: ", message);
    });
    res.writeHead(302, {'Location': '/'});
    return res.end();
  }
  //console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hey Damon, this is my first HTML page!</h1>');
});

server.listen(8888, () => {
  console.log('Server is listening on port 8888');
});