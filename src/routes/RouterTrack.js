const router = require("express").Router();
const controller = require("../controllers/trackController");
const responseHandler = require("../middlewares/responseHandler");

for (let key of Object.keys(controller)) {
  controller[key] = responseHandler(controller[key]);
}

router.post("/", controller.create);
router.get("/", controller.list);
router.get("/:id", controller.listOne);
router.patch("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
