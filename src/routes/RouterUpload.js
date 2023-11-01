const router = require("express").Router();
const controller = require("../controllers/uploadController");
const responseHandler = require("../middlewares/responseHandler");
const imgMulter = require("../services/imgMulter");
const audMulter = require("../services/audMulter");

for (let key of Object.keys(controller)) {
  controller[key] = responseHandler(controller[key]);
}

router.post("/playlist/:id", imgMulter.single("image"), controller.addPlaylistImg);
router.post("/track/:id", audMulter.single("audio"), controller.addTrackAud);

module.exports = router;
