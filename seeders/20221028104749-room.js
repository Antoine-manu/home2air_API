'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Room', {
			id_room: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			sensor_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			place_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			name: { type: Sequelize.DataTypes.STRING, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Room');
	}
};
