const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./User");
const Track = require("./Track");

const Playlist = sequelize.define("Playlist", {
  title: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },

  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Playlist;
