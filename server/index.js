const http = require('http');
const server = http.createServer();
const app = require('./app');

server.on('request', app);

server.listen(1337, () => {
    console.log('Server listening on 1337!');
});