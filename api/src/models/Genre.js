const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // Model's definition
    sequelize.define('genre', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false, 
          unique: true
      }
    });
};