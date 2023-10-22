const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Playlist = require("./Playlist");

const Track = sequelize.define("Track", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  artist: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  album: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Single",
  },

  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  src: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Track.belongsToMany(Playlist, {
  through: "TrackPlaylist",
});

module.exports = Track;
