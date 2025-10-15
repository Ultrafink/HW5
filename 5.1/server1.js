const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');ж

    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        res.statusCode = 401;
        res.end('Unautorized');
    } else {
        res.statusCode =200;
        res.end('Autorization header received');
    }
});

server.listen(3000, () => {
    console.log('Server1 is running on port 3000');
});