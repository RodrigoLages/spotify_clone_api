const Playlist = require("../models/Playlist");
const Track = require("../models/Track");

Track.belongsToMany(Playlist, {
  through: "TrackPlaylist",
});

module.exports = Track;
