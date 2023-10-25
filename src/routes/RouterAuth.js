const router = require("express").Router();
const controller = require("../controllers/authController");
const responseHandler = require("../middlewares/responseHandler");

router.post("/login", responseHandler(controller.login));
router.post("/register", responseHandler(controller.register));

module.exports = router;
