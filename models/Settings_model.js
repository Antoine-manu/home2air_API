'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Settings extends Model {
        static associate(models) {

        }
    }
    Settings.init({
        id_settings: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        dark_mode: { type: DataTypes.INTEGER = 1, allowNull: false },
        notifications: { type: DataTypes.INTEGER, allowNull: false }

    }, {
        sequelize, modelName: 'Settings'
    });
    return Settings;
}