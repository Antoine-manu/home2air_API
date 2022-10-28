'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({
        id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        firstname: { type: DataTypes.STRING, allowNull: false },
        lastname: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role_id: { type: DataTypes.INTEGER, allowNull: false },
        token: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: false },
        active: { type: DataTypes.BOOLEAN, allowNull: false },
        sensor_amount_locked: { type: DataTypes.BOOLEAN, allowNull: false },
        spaces_amount_locked: { type: DataTypes.BOOLEAN, allowNull: false },
        sensore_amount_max: { type: DataTypes.INTEGER, allowNull: false },
        spaces_amount_max: { type: DataTypes.INTEGER, allowNull: false },
        parent_account: { type: DataTypes.INTEGE, allowNull: true }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};