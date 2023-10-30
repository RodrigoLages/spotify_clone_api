const Playlist = require("../models/Playlist");
const Track = require("../models/Track");

Track.belongsToMany(Playlist, {
  through: "TrackPlaylist",
});

Playlist.beforeDestroy((track) => {
  const aud = track.getDataValue("src");
  deleteFile(aud);
});

module.exports = Track;
