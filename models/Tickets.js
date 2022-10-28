'use strict'
const sequelize = require('sequelize');
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Tickets extends Model {
		static associate(models) {

		}
	}
	Tickets.init({
		id_tickets: DataTypes.INTEGER,
		created_at: DataTypes.DATE,
		created_by: DataTypes.INTEGER,
		udpated_at: DataTypes.DATE,
		updated_by: DataTypes.INTEGER,
		comm_id: DataTypes.INTEGER,
		comm: DataTypes.STRING,
	}, {
		sequelize, modelName: 'Tickets'
	});
	return Tickets;
}