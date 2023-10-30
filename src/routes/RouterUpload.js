const router = require("express").Router();
const controller = require("../controllers/uploadController");
const responseHandler = require("../middlewares/responseHandler");
const imgMulter = require("../services/imgMulter");
const audMulter = require("../services/audMulter");

router.post("/playlist/:id", imgMulter.single("image"), responseHandler(controller.addPlaylistImg));
router.post("/track/:id", audMulter.single("audio"), responseHandler(controller.addTrackAud));

module.exports = router;
