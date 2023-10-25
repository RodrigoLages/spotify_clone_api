const Playlist = require("../models/Playlist");

const PlaylistController = {
  create: async (req) => {
    const newPlaylist = await Playlist.create(req.body);
    return newPlaylist;
  },

  list: async (req) => {
    const playlists = await Playlist.findAll();
    return playlists;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const playlists = await Playlist.findByPk(id);
    if (!playlists) throw new Error("Playlist not found");
    return playlists;
  },

  update: async (req) => {
    const playlist = await PlaylistController.listOne(req);
    const { title } = req.body;
    playlist.set({ title });
    await playlist.save();
    return playlist;
  },

  delete: async (req) => {
    const playlist = await PlaylistController.listOne(req);
    await playlist.destroy();
    return { msg: "Playlist deleted" };
  },
};

module.exports = PlaylistController;
