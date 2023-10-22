const User = require("../models/User");

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
