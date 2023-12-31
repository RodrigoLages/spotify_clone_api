const User = require("../hooks/User");

const UserController = {
  list: async (req) => {
    const users = await User.findAll({ attributes: { exclude: ["pass"] } });
    return users;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const user = await User.findByPk(id, { attributes: { exclude: ["pass"] } });
    return user;
  },

  update: async (req) => {
    const id = req.params.id;
    const user = await User.findByPk(id, { attributes: { exclude: ["pass"] } });
    const { body } = req;
    delete body.email;
    delete body.pass;

    user.set(body);
    await user.save();
    return user;
  },

  delete: async (req) => {
    const id = req.params.id;
    const user = await User.findByPk(id);
    await user.destroy();
    return { msg: "User deleted" };
  },
};

module.exports = UserController;
