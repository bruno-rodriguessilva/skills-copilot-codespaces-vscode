// Create web server
// Create a web server that listens on port 3000. 
// When you visit http://localhost:3000/ in your browser, 
// it should return the following content:
// <html><body>
// <h1>Comments</h1>
// <ul>
//   <li>Comment 1</li>
//   <li>Comment 2</li>
//   <li>Comment 3</li>
// </ul>
// </body></html>

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><h1>Comments</h1><ul><li>Comment 1</li><li>Comment 2</li><li>Comment 3</li></ul></body></html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: comments.js
// Create web server
// Create a web server that listens on port 3000. 
// When you visit http://localhost:3000/ in your browser, 
// it should return the following content:
// <html><body>
// <h1>Comments</h1>
// <ul>
//   <li>Comment 1</li>
//   <li>Comment 2</li>
//   <li>Comment 3</li>
// </ul>
// </body></html>

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><h1>Comments</h1><ul><li>Comment 1</li><li>Comment 2</li><li>Comment 3</li></ul></body></html>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Path: comments.js
// Create web server
// Create a web server that listens on port 3000. 
// When you visit http://localhost:3000/ in your browser, 
// it should return the following content:
// <html><body>
// <h1>Comments</h1