'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class CustomNotifications extends Model {
        static associate(models) {

        }
    }
    CustomNotifications.init({
        id_custom: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        title: { type: DataTypes.STRING, allowNull: false },
        data_id: { type: DataTypes.INTEGER, allowNull: false },
        limit: { type: DataTypes.INTEGER, allowNull: false },
        message: { type: DataTypes.STRING, allowNull: false },
        sound: { type: DataTypes.STRING, allowNull: false },
        icon: { type: DataTypes.STRING, allowNull: false },
        type_id: { type: DataTypes.INTEGER, allowNull: false },
        notif_id: { type: DataTypes.INTEGER, allowNull: false },
    }, {
        sequelize, modelName: 'CustomNotifications'
    });
    return CustomNotifications;
}