const User = require("../models/User");
const Playlist = require("../models/Playlist");
const Track = require("../models/Track");
const responseHandler = require("../middlewares/responseHandler");

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
    const track = await this.listOne(req);
    track = { ...track, ...req.body };
    await track.save();
    return track;
  },

  delete: async (req) => {
    const track = await this.listOne(req);
    await track.destroy();
    return { msg: "Track deleted" };
  },
};

for (let key of Object.keys(TrackController)) {
  TrackController[key] = responseHandler(TrackController[key]);
}

module.exports = TrackController;
