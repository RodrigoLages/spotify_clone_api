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
    allowNull: true,
    validate: {
      isValidDuration(value) {
        if (value && !/^[1-5]?[0-9]:[0-5][0-9]$/.test(value)) {
          throw new Error("Invalid duration format");
        }
      },
    },
  },

  src: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Track;
