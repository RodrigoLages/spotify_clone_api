const User = require("../models/User");
const Playlist = require("../models/Playlist");
const Track = require("../models/Track");
const deleteFile = require("../util/deleteFile");

Playlist.belongsTo(User);

Playlist.belongsToMany(Track, {
  through: "TrackPlaylist",
});

Playlist.beforeUpdate((playlist) => {
  const currentImg = playlist.previous("image");
  const newImg = playlist.getDataValue("image");

  if (currentImg && currentImg !== newImg) {
    deleteFile(currentImg);
  }
});

Playlist.beforeDestroy((playlist) => {
  const img = playlist.getDataValue("image");
  deleteFile(img);
});

module.exports = Playlist;
