'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Users', {
              id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
              },
              id_user: {
                type: Sequelize.INTEGER
              },
              firstname: {
                type: Sequelize.STRING
              },
              lastname: {
                type: Sequelize.STRING
              },
              email: {
                type: Sequelize.STRING
              },
              password: {
                type: Sequelize.STRING
              },
              role_id: {
                type: Sequelize.INTEGER
              },
              token: {
                type: Sequelize.STRING
              },
              created_at: {
                type: Sequelize.DATE
              },
              deleted_at: {
                type: Sequelize.DATE
              },
              active: {
                type: Sequelize.BOOLEAN
              },
              sensor_amount_locked: {
                type: Sequelize.BOOLEAN
              },
              spaces_amount_locked: {
                type: Sequelize.BOOLEAN
              },
              sensore_amount_max: {
                type: Sequelize.INTEGER
              },
              spaces_amount_max: {
                type: Sequelize.INTEGER
              },
              parent_account: {
                type: Sequelize.INTEGER
              },
              createdAt: {
                allowNull: false,
                type: Sequelize.DATE
              },
              updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
              }
            }));

          case 2:
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
            _context2.next = 2;
            return regeneratorRuntime.awrap(queryInterface.dropTable('Users'));

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};