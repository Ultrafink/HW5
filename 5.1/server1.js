import http from 'http';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.statusCode = 401;
    res.end('Unauthorized');
  } else {
    res.statusCode = 200;
    res.end('Authorization header received');
  }
});

server.listen(3000, () => {
  console.log('Server 1 is running on port 3000');
});
