const router = require("express").Router();
const controller = require("../controllers/uploadController");
const responseHandler = require("../middlewares/responseHandler");
const imgMulter = require("../services/imgMulter");

router.post(
  "/playlist/:id",
  imgMulter.single("image"),
  responseHandler(controller.addPlaylistImg)
);

module.exports = router;
