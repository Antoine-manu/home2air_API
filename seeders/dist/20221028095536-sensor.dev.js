'use strict';
/** @type {import('sequelize-cli').Migration} */

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _defineProperty({
  up: function up(queryInterface, Sequelize) {
    return regeneratorRuntime.async(function up$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", queryInterface.createTable('Sensor', {
              id_sensor: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
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
              room_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              user_id: {
                type: Sequelize.DataTypes.INTEGER,
                allowNull: false
              },
              name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false
              },
              udpated_at: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false
              },
              parameters: {
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
  }
}, "up", function up(queryInterface, Sequelize) {
  return regeneratorRuntime.async(function up$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", queryInterface.dropTable('Sensor'));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});