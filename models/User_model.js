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
        username: { type: DataTypes.STRING, allowNull: false },
        firstname: { type: DataTypes.STRING, allowNull: false },
        lastname: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        role_id: { type: DataTypes.INTEGER, allowNull: false },
        token: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: false },
        active: { type: DataTypes.BOOLEAN, allowNull: false },
        img: { type: DataTypes.STRING, allowNull: false },
        place_id: { type: DataTypes.INTEGER, allowNull: false }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};