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
        id_custom: DataTypes.INTEGER,
        title: DataTypes.STRING,
        data_id: DataTypes.INTEGER,
        limit: DataTypes.INTEGER,
        sound: DataTypes.STRING,
        icon: DataTypes.STRING,
        type_id: DataTypes.INTEGER
    }, {
        sequelize, modelName: 'CustomNotifications'
    });
    return CustomNotifications;
}