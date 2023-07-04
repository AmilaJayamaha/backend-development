const http = require('http');

const server = http.createServer(function (req, res) {
    res.end('Hello World');
});

server.listen(8000, 'localhost', () => {
    console.log('NodeJS is now listening on localhost:8000');
});