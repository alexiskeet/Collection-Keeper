const User = require('./User');
const Product = require('./Product');
const Collection = require('./Collection');

User.hasMany(Collection, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//User has many collections
//Collections has many products 
Collection.hasMany(Product, {
  foreignKey: 'collection_id'
});

module.exports = { User, Product, Collection };
