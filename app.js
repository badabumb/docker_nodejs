const http = require('http');

// Используем порт из переменной окружения или 8080 по умолчанию
const port = process.env.PORT || 8080;
const hostname = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Docker with Node.js!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});