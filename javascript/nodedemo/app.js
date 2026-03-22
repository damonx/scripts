// A simple http server in Node.js
import http from 'http';

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enger Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  console.log(req.url, req.method, req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hey Damon, this is my first HTML page!</h1>');
});

server.listen(8888, () => {
  console.log('Server is listening on port 8888');
});