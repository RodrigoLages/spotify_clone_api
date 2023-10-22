const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      minLength: function (value) {
        if (value.length < 3) {
          throw new Error("Username must be at least 3 characters long");
        }
      },
    },
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },

  pass: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  birth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isNotInFuture: function (value) {
        if (value > new Date()) {
          throw new Error("Birth date cannot be in the future");
        }
      },
    },
  },
});

module.exports = User;
