'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(queryInterface.createTable('Sensor', {
              id_sensor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
              },
              created_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              deleted_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              active: {
                type: Sequelize.BOOLEAN,
                allowNull: false
              },
              room_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              user_id: {
                type: Sequelize.INTEGER,
                allowNull: false
              },
              name: {
                type: Sequelize.STRING,
                allowNull: false
              },
              udpated_at: {
                type: Sequelize.DATE,
                allowNull: false
              },
              parameters: {
                type: Sequelize.STRING,
                allowNull: false
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
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};