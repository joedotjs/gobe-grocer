const Sequelize = require('sequelize');
const dbConnection = require('./_db');

const schema = {};
schema.name = {
    type: Sequelize.STRING,
    allowNull: false
};
schema.price = {
    type: Sequelize.INTEGER
};
schema.familyMember = {
    type: Sequelize.STRING
};

const options = {};
options.classMethods = {};
options.hooks = {};

module.exports = dbConnection.define('groceryItem', schema, options);