'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Tickets', {
			id_tickets: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: { type: Sequelize.INTEGER, allowNull: false },
			title: { type: Sequelize.STRING, allowNull: false },
			status: { type: Sequelize.INTEGER, allowNull: false },
			created_at: { type: Sequelize.DATE, allowNull: false },
			created_by: { type: Sequelize.INTEGER, allowNull: false },
			udpated_at: { type: Sequelize.DATE, allowNull: false },
			updated_by: { type: Sequelize.INTEGER, allowNull: false },
			comm_id: { type: Sequelize.INTEGER, allowNull: false },
			comm: { type: Sequelize.STRING, allowNull: false }
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
