'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Settings', {
			id_settings: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: { type: Sequelize.INTEGER, allowNull: false },
			dark_mode: { type: (Sequelize.INTEGER = 1), allowNull: false },
			notifications: { type: Sequelize.INTEGER, allowNull: false }
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
