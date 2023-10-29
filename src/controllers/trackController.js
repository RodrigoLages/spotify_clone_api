const Track = require("../hooks/Track");

const TrackController = {
  create: async (req) => {
    const newTrack = await Track.create(req.body);
    return newTrack;
  },

  list: async (req) => {
    const tracks = await Track.findAll();
    return tracks;
  },

  listOne: async (req) => {
    const id = req.params.id;
    const track = await Track.findByPk(id);
    if (!track) throw new Error("Track not found");
    return track;
  },

  update: async (req) => {
    const track = await TrackController.listOne(req);
    const { body } = req;
    track.set(body);
    await track.save();
    return track;
  },

  delete: async (req) => {
    const track = await TrackController.listOne(req);
    await track.destroy();
    return { msg: "Track deleted" };
  },
};

module.exports = TrackController;
