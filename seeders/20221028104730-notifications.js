'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Notifications', {
			id_notifications: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			custom: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
			read: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
			type: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			date: { type: Sequelize.DataTypes.DATE, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Notifications');
	}
};
