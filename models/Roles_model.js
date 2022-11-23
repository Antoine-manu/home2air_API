'use strict'
const Sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roles extends Model {
        static associate(models) {

        }
    }
	Roles.init(
		{
			id_role: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			name: { type: Sequelize.STRING, allowNull: false }
		},
		{
			sequelize,
			modelName: 'Roles'
		}
	);
	return Room;
};
