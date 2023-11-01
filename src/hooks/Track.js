const Playlist = require("../models/Playlist");
const Track = require("../models/Track");
const deleteFile = require("../util/deleteFile");

Track.belongsToMany(Playlist, {
  through: "TrackPlaylist",
});

Track.beforeUpdate((track) => {
  const currentAud = track.previous("src");
  const newAud = track.getDataValue("src");

  if (currentAud && currentAud !== newAud) {
    deleteFile(currentAud);
  }
});

Track.beforeDestroy((track) => {
  const aud = track.getDataValue("src");
  deleteFile(aud);
});

module.exports = Track;
