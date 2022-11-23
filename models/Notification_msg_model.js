'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Notification_msg extends Model {
        static associate(models) {

        }
    }
    Notification_msg.init({
        id_notif_msg: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        content: { type: DataTypes.STRING, allowNull: false }

    }, {
        sequelize, modelName: 'TicketsComm'
    });
    return Notification_msg;
}