'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Sensor', {
			id_sensor: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			created_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			deleted_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			active: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
			room_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			name: { type: Sequelize.DataTypes.STRING, allowNull: false },
			udpated_at: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false
			},
			parameters: { type: Sequelize.DataTypes.STRING, allowNull: false }
		});
	},
	async up(queryInterface, Sequelize) {
		return queryInterface.dropTable('Sensor');
	}
};
