const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET = process.env.JWT_SECRET;

module.exports = {
  login: async (req, res) => {
    const { email, pass } = req.body;
    try {
      const user = await User.findOne({ where: { email } });
      if (!user || !(await bcrypt.compare(pass, user.pass))) {
        return res.status(400).json({ msg: "Incorrect credentials" });
      }

      const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "12h" });
      return res.status(200).json({
        id: user.id,
        username: user.username,
        token,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: err });
    }
  },

  register: async (req, res) => {
    const newUser = req.body;
    const { pass } = req.body;

    if (!pass) return res.status(400).json({ msg: "Missing 'pass' attribute" });
    const salt = await bcrypt.genSalt(5);
    const hashed = await bcrypt.hash(pass, salt);
    newUser.pass = hashed;

    try {
      const user = await User.create(newUser);
      delete user.pass;
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  },
};
