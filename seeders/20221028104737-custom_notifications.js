'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('CustomNotifications', {
			id_custom: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true
			},
			title: { type: Sequelize.DataTypes.STRING, allowNull: false },
			data_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			limit: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			message: { type: Sequelize.DataTypes.STRING, allowNull: false },
			sound: { type: Sequelize.DataTypes.STRING, allowNull: false },
			icon: { type: Sequelize.DataTypes.STRING, allowNull: false },
			type_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			notif_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('CustomNotifications');
	}
};
