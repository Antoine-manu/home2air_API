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
        id_settings: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        dark_mode: DataTypes.INTEGER = 1

    }, {
        sequelize, modelName: 'Settings'
    });
    return Settings;
}