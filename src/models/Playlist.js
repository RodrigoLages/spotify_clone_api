const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const User = require("./User");

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

Playlist.belongsTo(User);

module.exports = Playlist;
