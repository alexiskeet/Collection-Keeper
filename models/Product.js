const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
         user_id: {
           type: DataTypes.INTEGER,
           references: {
               model: "user",
               key: "id",
           }
       },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;