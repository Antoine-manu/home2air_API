'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('NotificationsTypes', {
			id_type: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			name: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false
			}
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('NotificationsTypes');
	}
};
