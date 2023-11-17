const express = require("express");
const userController = require("../controllers/userController");
const animeController = require("../controllers/animeController")
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

router.route("/animes/:query").get(checkToken, animeController.buscarAnimes)
router.route("/animes/:query/details").get(checkToken, animeController.buscarAnimeInfo)
router.route("/animes/:userId/favorite/:animeName").post(checkToken, animeController.adicionarFavorito)
router.route("/animes/:userId/favorities").get(checkToken, animeController.buscarAnimesFavoritos)

module.exports = router;
