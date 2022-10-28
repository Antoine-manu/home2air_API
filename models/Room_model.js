'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Room extends Model {
        static associate(models) {

        }
    }
    Room.init({
        id_room: { type: DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
        sensor_id: { type: DataTypes.INTEGER, allowNull: false },
        place_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false }
    }, {
        sequelize, modelName: 'Room'
    });
    return Room;
}