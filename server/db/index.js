const dbConnection = require('./_db');
const GroceryItem = require('./GroceryItem');

module.exports = {
    db: dbConnection,
    GroceryItem: GroceryItem
};