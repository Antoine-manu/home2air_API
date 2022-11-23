'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Notifications', {
			id_notifications: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: { type: Sequelize.INTEGER, allowNull: false },
			custom: { type: Sequelize.BOOLEAN, allowNull: false },
			read: { type: Sequelize.BOOLEAN, allowNull: false },
			type: { type: Sequelize.INTEGER, allowNull: false },
			date: { type: Sequelize.DATE, allowNull: false }
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
