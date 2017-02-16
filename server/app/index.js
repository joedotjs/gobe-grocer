const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
module.exports = app;

const apiSubRouter = require('./routers/api');

app.use(
  express.static(
    path.resolve(__dirname, '../../public')
  )
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', apiSubRouter);
app.use('/ajax', apiSubRouter);
app.use('/info', apiSubRouter);

app.get('/*', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

