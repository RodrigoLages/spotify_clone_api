const User = require("../models/User");
const Playlist = require("../models/Playlist");

User.hasMany(Playlist);

module.exports = User;
