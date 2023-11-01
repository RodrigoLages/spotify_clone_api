const fs = require("fs");
const mp3duration = require("get-mp3-duration");

const getAudDuration = (filePath) => {
  if (fs.existsSync(filePath)) {
    try {
      buffer = fs.readFileSync(filePath);
      const secDuration = mp3duration(buffer) / 1000;
      const min = Math.floor(secDuration / 60);
      const sec = Math.floor(secDuration % 60);

      const formatedDuration = `${min}:${sec < 10 ? `0${sec}` : sec}`;
      return formatedDuration;
    } catch (err) {
      console.error("Error getting the duration");
    }
  } else {
    console.error("File not found");
  }
};

module.exports = getAudDuration;
