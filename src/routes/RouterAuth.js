const router = require("express").Router();
const controller = require("../controllers/authController");
const responseHandler = require("../middlewares/responseHandler");

for (let key of Object.keys(controller)) {
  controller[key] = responseHandler(controller[key]);
}

router.post("/login", controller.login);
router.post("/register", controller.register);

module.exports = router;
