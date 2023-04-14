const User = require('./User');
const Product = require('./Product');
//const Collection = require('./Collection');

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

//User has many collections
//Collections has many products 
Product.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Product };
