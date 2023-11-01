const Playlist = require("../hooks/Playlist");
const Track = require("../hooks/Track");
const deleteFile = require("../util/deleteFile");
const getAudDuration = require("../util/getAudDuration");

const UploadController = {
  addPlaylistImg: async (req) => {
    if (!req.file) {
      throw new Error("Invalid file format. Only JPG and PNG are allowed.");
    }

    const filePath = req.file.path;
    const playlist = await Playlist.findByPk(req.params.id).catch(() => {
      deleteFile(filePath);
      throw new Error("Playlist not found");
    });
    playlist.set({ image: filePath });
    await playlist.save();

    return { msg: "File uploaded", filePath };
  },

  addTrackAud: async (req) => {
    if (!req.file) {
      throw new Error("Invalid file format. Only MP3 is allowed.");
    }

    const filePath = req.file.path;
    const track = await Track.findByPk(req.params.id).catch(() => {
      deleteFile(filePath);
      throw new Error("Track not found");
    });

    const duration = getAudDuration(filePath);
    track.set({ duration, src: filePath });
    await track.save();

    return { msg: "File uploaded", filePath };
  },
};

module.exports = UploadController;
