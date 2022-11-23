'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('User', {
              id_user: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
              },
              username: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              firstname: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              lastname: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              email: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              password: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              role_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              token: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              created_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
              },
              deleted_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
              },
              active: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false
              },
              img: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              place_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              }
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  down: function down(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function down$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", queryInterface.dropTable('User'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};