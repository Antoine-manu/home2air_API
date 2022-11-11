'use strict'
const sequelize = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TicketsComm extends Model {
        static associate(models) {

        }
    }
    TicketsComm.init({
        id_ticket_comm: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
        content: { type: DataTypes.STRING, allowNull: false },
        ticket_id: { type: DataTypes.INTEGER, allowNull: false }

    }, {
        sequelize, modelName: 'TicketsComm'
    });
    return TicketsComm;
}