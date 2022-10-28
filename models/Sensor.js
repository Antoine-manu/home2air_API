'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sensor extends Model {
        static associate(models) {

        }
    }
    Sensor.init({
        id_sensor: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
        active: DataTypes.BOOLEAN,
        room_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        udpated_at: DataTypes.DATE
    }, {
        sequelize, modelName: 'Sensor'
    });
    return Sensor;
}