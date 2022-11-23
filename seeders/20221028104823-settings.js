'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('Config', {
			id_config: {
				type: Sequelize.DataTypes.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			user_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			dark_mode: { type: (Sequelize.DataTypes.INTEGER), allowNull: false },
			notifications: { type: Sequelize.DataTypes.INTEGER, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('Config');
	}
};
