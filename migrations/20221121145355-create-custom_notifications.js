'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('CustomNotifications', {
			id_custom: {
				type: Sequelize.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			title: { type: Sequelize.STRING, allowNull: false },
			data_id: { type: Sequelize.INTEGER, allowNull: false },
			limit: { type: Sequelize.INTEGER, allowNull: false },
			message: { type: Sequelize.STRING, allowNull: false },
			sound: { type: Sequelize.STRING, allowNull: false },
			icon: { type: Sequelize.STRING, allowNull: false },
			type_id: { type: Sequelize.INTEGER, allowNull: false },
			notif_id: { type: Sequelize.INTEGER, allowNull: false }
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
