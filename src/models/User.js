const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = User;
