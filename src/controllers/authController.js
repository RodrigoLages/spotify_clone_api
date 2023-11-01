const User = require("../hooks/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const ApiError = require("../classes/ApiError");
const SECRET = process.env.JWT_SECRET;

const AuthController = {
  login: async (req) => {
    const { email, pass } = req.body;
    const user = await User.findOne({ where: { email } }).catch((err) => {
      throw new ApiError(401, "Incorrect credentials");
    });
    if (!(await bcrypt.compare(pass, user.pass))) {
      throw new ApiError(401, "Incorrect credentials");
    }

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "12h" });
    return {
      id: user.id,
      username: user.username,
      token,
    };
  },

  register: async (req) => {
    const newUser = req.body;
    const { pass } = req.body;
    if (!pass) throw new ApiError(400, "Missing 'pass' attribute");

    const salt = await bcrypt.genSalt(5);
    const hashed = await bcrypt.hash(pass, salt);
    newUser.pass = hashed;

    const user = (await User.create(newUser)).toJSON();
    delete user.pass;
    return user;
  },
};

module.exports = AuthController;
