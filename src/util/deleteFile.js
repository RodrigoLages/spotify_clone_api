const fs = require("fs");
const path = require("path");

const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting the file");
      }

      return "File deleted";
    });
  } else {
    console.error("File not found");
  }
};

module.exports = deleteFile;
