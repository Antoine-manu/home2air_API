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
        id_notifications: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        custom: { type: DataTypes.BOOLEAN, allowNull: false },
        custom_id: { type: DataTypes.INTEGER, allowNull: false },
        read: { type: DataTypes.BOOLEAN, allowNull: false },
        type: { type: DataTypes.INTEGER, allowNull: false },
        date: { type: DataTypes.DAT, allowNull: false }
    }, {
        sequelize, modelName: 'Notifications'
    });
    return Notifications;
}