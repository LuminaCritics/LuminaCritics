const express = require("express");
const userController = require("../controllers/userController");
const checkToken = require("../middlewares/auth");
const { insertValidation, updateValidation, loginValidation } = require("../middlewares/validationMiddleware")
const router = express.Router();

router.route("/users").get(checkToken, userController.getAll);
router.route("/users/create").post(insertValidation, userController.create);
router.route("/users/login").post(loginValidation, userController.login);
router
  .route("/users/:id")
  .put(updateValidation, checkToken, userController.update)
  .get(checkToken, userController.findById)
  .delete(checkToken, userController.delete);

module.exports = router;
