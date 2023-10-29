const express = require("express");
const router = express.Router();

router.use("/user", require("./RouterUser"));
router.use("/auth", require("./RouterAuth"));
router.use("/track", require("./RouterTrack"));
router.use("/playlist", require("./RouterPlaylist"));
router.use("/upload", require("./RouterUpload"));

router.use("/public", express.static("./public"));

module.exports = router;
