const express = require("express");
const router = express.Router();

router.use("/user", require("./RouterUser"));

module.exports = router;
