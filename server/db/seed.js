const dbStuff = require('./index');
const dbConnection = dbStuff.db;
const GroceryItem = dbStuff.GroceryItem;

dbConnection.sync({force: true})
  .then(() => {
    const items = [
        {name: 'Chips', familyMember: 'John', price: 10},
        {name: 'Blender', familyMember: 'Joe', price: 200},
        {name: 'Bread', familyMember: 'Christine', price: 5}
    ];
    const promisesToCreateItems = items.map(item => GroceryItem.create(item));
    return Promise.all(promisesToCreateItems);
  })
  .then(() => {
    console.log('Finished seeding!');
    process.exit(0);
  })
  .catch(console.error);