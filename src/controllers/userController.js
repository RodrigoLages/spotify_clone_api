const User = require("../models/User");
const Playlist = require("../models/Playlist");
const Track = require("../models/Track");

module.exports = {
  list: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json({ users });
    } catch (err) {
      return res.status(500).json({ err: err.message });
    }
  },
};
