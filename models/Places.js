'use strict'
const sequelize = require('sequelize');
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Places extends Model {
		static associate(models) {

		}
	}
	Places.init({
		id_place: DataTypes.INTEGER,
		user_id: DataTypes.INTEGER,
		name: DataTypes.STRING,
	}, {
		sequelize, modelName: 'Places'
	});
	return Places;
}