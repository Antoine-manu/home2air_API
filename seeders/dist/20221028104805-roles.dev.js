'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('Roles', {
              id_role: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              name: {
                type: Sequelize.DataTypes.STRING,
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
            return _context2.abrupt("return", queryInterface.dropTable('Roles'));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};