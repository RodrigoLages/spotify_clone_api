const Playlist = require("../hooks/Playlist");
const Track = require("../hooks/Track");

const UploadController = {
  addPlaylistImg: async (req) => {
    if (!req.file) {
      throw new Error("Invalid file format. Only JPG and PNG are allowed.");
    }

    const filePath = req.file.path;
    const playlist = await Playlist.findByPk(req.params.id);
    playlist.set({ image: filePath });
    await playlist.save();

    return { msg: "File uploaded", filePath };
  },

  addTrackAud: async (req) => {
    if (!req.file) {
      throw new Error("Invalid file format. Only MP3 are allowed.");
    }

    const filePath = req.file.path;
    const track = await Track.findByPk(req.params.id);
    track.set({ src: filePath });
    await track.save();

    return { msg: "File uploaded", filePath };
  },
};

module.exports = UploadController;
