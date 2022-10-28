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
        id_type: DataTypes.INTEGER,
        name: DataTypes.STRING,

    }, {
        sequelize, modelName: 'NotificationsTypes'
    });
    return NotificationsTypes;
}