const Playlist = require("../hooks/Playlist");
const Track = require("../hooks/Track");
const TrackController = require("./trackController");

const PlaylistController = {
  create: async (req) => {
    const newPlaylist = await Playlist.create(req.body);
    return newPlaylist;
  },

  listByUser: async (req) => {
    const UserId = req.params.id;
    const playlists = await Playlist.findAll({ where: { UserId } });
    return playlists;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const playlists = await Playlist.findByPk(id, {
      include: {
        model: Track,
        through: { attributes: [] },
      },
    });
    if (!playlists) throw new Error("Playlist not found");
    return playlists;
  },

  update: async (req) => {
    const playlist = await PlaylistController.listOne(req);
    const body = req.body;
    if (body.image !== null) delete body.image;
    playlist.set(body);
    await playlist.save();
    return playlist;
  },

  delete: async (req) => {
    const playlist = await PlaylistController.listOne(req);
    await playlist.destroy();
    return { msg: "Playlist deleted" };
  },

  //Tracks methods
  addTrack: async (req) => {
    const { TrackId, PlaylistId } = req.body;
    const playlist = await PlaylistController.listOne({
      params: { id: PlaylistId },
    });
    const track = await TrackController.listOne({ params: { id: TrackId } });
    await playlist.addTrack(track);
    return { msg: "Track added to playlist" };
  },

  removeTrack: async (req) => {
    const { TrackId, PlaylistId } = req.body;
    const playlist = await PlaylistController.listOne({
      params: { id: PlaylistId },
    });
    const track = await TrackController.listOne({ params: { id: TrackId } });
    await playlist.removeTrack(track);
    return { msg: "Track removed from playlist" };
  },
};

module.exports = PlaylistController;
