const express = require("express");
const router = express.Router();

router.use("/user", require("./RouterUser"));
router.use("/auth", require("./RouterAuth"));

module.exports = router;
