const http = require('http');
const server = http.createServer();
const app = require('./app');
const dbConnection = require('./db').db;

server.on('request', app);

dbConnection.sync()
  .then(() => {
      server.listen(1337, () => {
          console.log('Server listening on 1337!');
      });
  });
