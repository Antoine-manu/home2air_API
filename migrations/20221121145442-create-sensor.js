'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Sensor', {
			id_sensor: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			created_at: { type: Sequelize.DATE, allowNull: false },
			deleted_at: { type: Sequelize.DATE, allowNull: false },
			active: { type: Sequelize.BOOLEAN, allowNull: false },
			room_id: { type: Sequelize.INTEGER, allowNull: false },
			user_id: { type: Sequelize.INTEGER, allowNull: false },
			name: { type: Sequelize.STRING, allowNull: false },
			udpated_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			parameters: { type: Sequelize.STRING, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		/**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
	}
};
