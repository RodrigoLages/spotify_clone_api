const express = require("express");
const router = express.Router();

router.use("/user", require("./RouterUser"));
router.use("/auth", require("./RouterAuth"));
router.use("/track", require("./RouterTrack"));
router.use("/playlist", require("./RouterPlaylist"));

module.exports = router;
