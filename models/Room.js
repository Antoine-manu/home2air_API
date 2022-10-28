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
		id_room: DataTypes.INTEGER,
		sensor_id: DataTypes.INTEGER,
		place_id: DataTypes.INTEGER,
		name: DataTypes.STRING,
	}, {
		sequelize, modelName: 'Room'
	});
	return Room;
}