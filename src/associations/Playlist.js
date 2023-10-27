const User = require("../models/User");
const Playlist = require("../models/Playlist");
const Track = require("../models/Track");

Playlist.belongsTo(User);

Playlist.belongsToMany(Track, {
  through: "TrackPlaylist",
});

module.exports = Playlist;
