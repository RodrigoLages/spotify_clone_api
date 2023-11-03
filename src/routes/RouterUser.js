const router = require("express").Router();
const controller = require("../controllers/userController");
const responseHandler = require("../middlewares/responseHandler");
const { devAuth, userAuth } = require("../middlewares/auth");

for (let key of Object.keys(controller)) {
  controller[key] = responseHandler(controller[key]);
}

router.get("/", devAuth, controller.list);
router.get("/:id", userAuth, controller.listOne);
router.patch("/:id", userAuth, controller.update);
router.delete("/:id", devAuth, controller.delete);

module.exports = router;
