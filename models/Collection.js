// //const { Model, DataTypes} = require('sequelize');
// const sequelize = require('../config/connection');

// class Collection extends Model {}

// Collection.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         collection_name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: DataTypes.STRING,
//             allowNull: true,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: "user",
//                 key: "id",
//             }
//         },
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'collection',
//     }
// );

// //module.exports = Collection;