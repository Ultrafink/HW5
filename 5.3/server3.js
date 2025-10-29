import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  switch (req.method) {
    case 'PUT':
      res.statusCode = 200;
      res.end('PUT request processed');
      break;
    case 'DELETE':
      res.statusCode = 200;
      res.end('DELETE request processed');
      break;
    default:
      res.statusCode = 405;
      res.end('Method not supported');
  }
});

server.listen(3000, () => {
  console.log('✅ Server 3 is running on port 3000');
});
