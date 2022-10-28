
'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roles extends Model {
        static associate(models) {

        }
    }
    Roles.init({
        id_role: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false }
    }, {
        sequelize, modelName: 'Roles'
    });
    return Roles;
}