'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notifications extends Model {
        static associate(models) {

        }
    }
    Notifications.init({
        id_notifications: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        custom: DataTypes.BOOLEAN,
        custom_id: DataTypes.INTEGER,
        read: DataTypes.BOOLEAN,
        type: DataTypes.INTEGER,
        date: DataTypes.DATE
    }, {
        sequelize, modelName: 'Notifications'
    });
    return Notifications;
}