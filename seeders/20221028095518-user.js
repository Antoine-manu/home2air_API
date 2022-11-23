'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.createTable('User', {
			id_user: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			username: { type: Sequelize.DataTypes.STRING, allowNull: false },
			firstname: { type: Sequelize.DataTypes.STRING, allowNull: false },
			lastname: { type: Sequelize.DataTypes.STRING, allowNull: false },
			email: { type: Sequelize.DataTypes.STRING, allowNull: false },
			password: { type: Sequelize.DataTypes.STRING, allowNull: false },
			role_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
			token: { type: Sequelize.DataTypes.STRING, allowNull: false },
			created_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			deleted_at: { type: Sequelize.DataTypes.DATE, allowNull: false },
			active: { type: Sequelize.DataTypes.BOOLEAN, allowNull: false },
			img: { type: Sequelize.DataTypes.STRING, allowNull: false },
			place_id: { type: Sequelize.DataTypes.INTEGER, allowNull: false }
		});
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.dropTable('User');
	}
};
