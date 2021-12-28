const http = require('http');

const server = http.createServer( (req, res) => {
    res.end("Hello world!!!");
});

server.listen(3000, () => {
    console.log('Server listen on port 3000');
});