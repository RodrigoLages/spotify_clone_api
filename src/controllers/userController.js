const User = require("../models/User");

const UserController = {
  list: async (req) => {
    const users = await User.findAll({ attributes: { exclude: ["pass"] } });
    return users;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const user = await User.findByPk(id, { attributes: { exclude: ["pass"] } });
    if (!user) throw new Error("User not found");
    return user;
  },

  update: async (req) => {
    const user = await UserController.listOne(req);
    const { body } = req;
    delete body.email;
    delete body.pass;

    user.set(body);
    await user.save();
    return user;
  },

  delete: async (req) => {
    const user = await UserController.listOne(req);
    await user.destroy();
    return { msg: "User deleted" };
  },
};

module.exports = UserController;
