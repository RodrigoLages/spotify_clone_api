const router = require("express").Router();
const controller = require("../controllers/trackController");
const responseHandler = require("../middlewares/responseHandler");

router.post("/", responseHandler(controller.create));
router.get("/", responseHandler(controller.list));
router.get("/:id", responseHandler(controller.listOne));
router.patch("/:id", responseHandler(controller.update));
router.delete("/:id", responseHandler(controller.delete));

module.exports = router;
