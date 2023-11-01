const router = require("express").Router();
const controller = require("../controllers/playlistController");
const responseHandler = require("../middlewares/responseHandler");

for (let key of Object.keys(controller)) {
  controller[key] = responseHandler(controller[key]);
}

router.post("/track", controller.addTrack);
router.delete("/track", controller.removeTrack);

router.post("/", controller.create);
router.get("/user/:id", controller.listByUser);
router.get("/:id", controller.listOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
