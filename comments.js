//create web server
const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8000; // Change this to the desired port number
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (filePath === './') {
    filePath = './index.html'; // Serve 'index.html' as the default file
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
  };

  const contentTypeHeader = contentType[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Sorry, check with the site admin for error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentTypeHeader });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
