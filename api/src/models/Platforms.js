const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('platform', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        }
    });
};