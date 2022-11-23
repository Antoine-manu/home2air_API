// const { DB_PASSWORD, DB_NAME, DB_HOST, DB_USER } = require("./const");
// 'use strict'
// class db {
//     constructor() {
//         const Sequelize = require("sequelize");
//         const sequelize = new Sequelize(
//             DB_NAME,
//             DB_USER,
//             DB_PASSWORD,
//             {
//                 host: DB_HOST,
//                 dialect: 'mysql'
//             }
//         );
//         sequelize.authenticate().then(() => {
//             console.log('Connection has been established successfully')
//         }).catch((error) => {
//             console.error('Unable to connect to the database: ', error);
//             return false
//         });
//         return sequelize
//     }
// }
// module.exports =
//     db
"use strict";