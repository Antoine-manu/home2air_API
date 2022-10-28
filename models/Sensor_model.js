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
        id_sensor: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: false },
        active: { type: DataTypes.BOOLEAN, allowNull: false },
        room_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        udpated_at: {
            type: DataTypes.DATE, allowNull: false
        }
    }, {
        sequelize, modelName: 'Sensor'
    });
    return Sensor;
}