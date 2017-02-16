const express = require('express');
const subRouter = express.Router();
module.exports = subRouter;
const GroceryItem = require('../../db').GroceryItem;

subRouter.post('/add-item', (req, res, next) => {
    GroceryItem.create(req.body)
      .then(createdItemInDB => {
          res.send(createdItemInDB);
      })
      .catch(next);
});

subRouter.delete('/remove-item/:name', (req, res, next) => {

    GroceryItem.destroy({
        where: {
            name: req.params.name
        }
    })
      .then(() => {
          return GroceryItem.findAll();
      })
      .then(items => res.send(items))
      .catch(next);

});

subRouter.get('/list', (req, res, next) => {
    GroceryItem.findAll()
      .then(items => res.send(items))
      .catch(next);
});