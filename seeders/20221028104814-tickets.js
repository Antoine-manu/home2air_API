'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Tickets', {
			id_tickets: { type: Sequelize.DataTypes.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			title: { type: Sequelize.DataTypes.STRING, allowNull: false },
			status: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			created_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			created_by: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			udpated_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			updated_by: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			comm_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			comm: { type: Sequelize.DataTypes.STRING, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Tickets');
	}
};
