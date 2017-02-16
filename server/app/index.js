const express = require('express');
const app = express();
const bodyParser = require('body-parser');
module.exports = app;

const fs = require('fs');
const path = require('path');
const pathToList = path.resolve(__dirname, './list.txt');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/add-item', (req, res, next) => {
    const {name, familyMember, price} = req.body;
    fs.appendFile(
      pathToList,
      `${familyMember}|${name}|${price}\n`,
      function (err) {
          if (err) return next(err);
          res.send(req.body);
      });

});

app.get('/list', (req, res, next) => {
    fs.readFile(pathToList, (err, contents) => {
       if (err) return next(err);
       const fileAsString = contents.toString();
       const linesInFile = fileAsString.split('\n').slice(0, -1);
       const items = linesInFile.map(line => {
            const [familyMember, name, price] = line.split('|');
            return {
                familyMember,
                name,
                price
            };
       });
       res.send(items);
    });
});

app.delete('/remove-item/:name', (req, res) => {
    fs.readFile(pathToList, (err, contents) => {
        if (err) return next(err);
        const fileAsString = contents.toString();
        const linesInFile = fileAsString.split('\n').slice(0, -1);
        const newLines = linesInFile.filter(line => {
           return !line.includes(req.params.name);
        });
        fs.writeFile(pathToList, newLines.join('\n'), function (err) {
            if (err) return next(err);
            fs.readFile(pathToList, (err, contents) => {
                if (err) return next(err);
                res.send(contents.toString());
            });
        });
    });

});

