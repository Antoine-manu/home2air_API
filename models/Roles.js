
'use strict'
const sequelize = require('sequelize');
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Roles extends Model {
		static associate(models) {

		}
	}
	Roles.init({
		id_role: DataTypes.INTEGER,
		name: DataTypes.STRING,
	}, {
		sequelize, modelName: 'Roles'
	});
	return Roles;
}