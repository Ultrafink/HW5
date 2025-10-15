const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.method === 'PUT') {
        res.statusCode = 200;
        res.end('PUT equest processed');
    } else if (req.method === 'DELETE') {
        res.statusCode = 200;
        res.end('DELETE request processed');
    } else {
        res.statusCode = 405;
        res.end('Method not supported');
    }
});

server.listen(3000, () => {
    console.log('Server3 is running on port 3000');
});