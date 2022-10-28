'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class NotificationsTypes extends Model {
        static associate(models) {

        }
    }
    NotificationsTypes.init({
        id_type: {
            type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true
        },
        name: {
            type: DataTypes.STRING, allowNull: false
        }
    }, {
        sequelize, modelName: 'NotificationsTypes'
    });
    return NotificationsTypes;
}