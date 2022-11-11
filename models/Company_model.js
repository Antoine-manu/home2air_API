'use strict'
const sequelize = require('sequelize');
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Company extends Model {
		static associate(models) {

		}
	}
	Company.init({
		id_company: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		name: { type: DataTypes.STRING, allowNull: false }
	}, {
		sequelize, modelName: 'Company'
	});
	return Company;
}