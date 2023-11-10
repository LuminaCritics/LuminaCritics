const express = require("express");
const userController = require("../controllers/userController");
const checkToken = require("../middlewares/auth");
const router = express.Router();

router.route("/users").get(checkToken, userController.getAll);
router.route("/users/create").post(userController.create);
router.route("/users/login").post(userController.login);
router
  .route("/users/:id")
  .put(checkToken, userController.update)
  .get(checkToken, userController.findById)
  .delete(checkToken, userController.delete);

module.exports = router;
