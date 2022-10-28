'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Company extends Model {
        static associate(models) {

        }
    }
    Company.init({
        id_company: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
    }, {
        sequelize, modelName: 'Company'
    });
    return Company;
}