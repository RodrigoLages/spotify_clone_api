const User = require("../models/User");
const Playlist = require("../models/Playlist");
const Track = require("../models/Track");
const responseHandler = require("../middlewares/responseHandler");

const UserController = {
  list: async (req) => {
    const users = await User.findAll();
    return users;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    if (!user) throw new Error("User not found");
    return user;
  },

  update: async (req) => {
    const user = await this.listOne(req);
    const { username, birth } = req.body;

    user.username = username;
    user.birth = birth;
    await user.save();

    return user;
  },

  delete: async (req) => {
    const user = await this.listOne(req);
    await user.destroy();
    return { msg: "User deleted" };
  },
};

for (let key of Object.keys(UserController)) {
  UserController[key] = responseHandler(UserController[key]);
}

module.exports = UserController;
