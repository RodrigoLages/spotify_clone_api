const Playlist = require("../hooks/Playlist");

const UploadController = {
  addPlaylistImg: async (req) => {
    if (!req.file) {
      throw new Error("Invalid file format. Only JPG and PNG are allowed.");
    }

    const filePath = req.file.path;
    const playlist = await Playlist.findByPk(req.params.id);
    playlist.set({ image: filePath });
    await playlist.save();

    return { msg: "File uploaded successfully", filePath };
  },
};

module.exports = UploadController;
