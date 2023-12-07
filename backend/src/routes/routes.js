const express = require("express");
const userController = require("../controllers/userController");
const animeController = require("../controllers/animeController");
const commentController = require("../controllers/commentController");
const ratingController = require("../controllers/ratingController");
const checkToken = require("../middlewares/auth");
const { insertValidation, updateValidation, loginValidation } = require("../middlewares/validationMiddleware");
const router = express.Router();

router.route("/users").get(checkToken, userController.getAll);
router.route("/users/create").post(insertValidation, userController.create);
router.route("/users/login").post(loginValidation, userController.login);
router
  .route("/users/:id")
  .put(updateValidation, checkToken, userController.update)
  .get(checkToken, userController.findById)
  .delete(checkToken, userController.delete);

router.route("/users/recuperar-senha").post(userController.recuperarSenha)
router.route("/users/redefinir-senha").post(userController.redefinirSenha)

router.route("/animes/:query").get(animeController.buscarAnimes)
router.route("/animes/:query/details").get(checkToken, animeController.buscarAnimeInfo)
router.route("/animes/:userId/favorite/:animeName").post(checkToken, animeController.adicionarFavorito)
router.route("/animes/:userId/favorities").get(checkToken, animeController.buscarAnimesFavoritos)
router.route("/comentario/:userId/comentar/:movie_id/:comment").post(checkToken, commentController.adicionarComentario)
router.route("/comentario/:userId/comentarios").get(checkToken, commentController.buscarComentarios)
router.route("/comentario/:userId/comentarios/:movie_id").get(checkToken, commentController.buscarComentariosPorFilme)
router.route("/comentario/all/:movie_id").get(checkToken, commentController.retornarComentariosPorFilmeAll)
router.route("/comentario/:userId/comentar/editar/:commentId/:comment").put(checkToken, commentController.editarComentario)
router.route("/comentario/:userId/comentar/deletar/:commentId").delete(checkToken, commentController.deletarComentario)
router.route("/avaliar/:userId/item/:movie_id/:rating").post(checkToken, ratingController.adicionarAvaliacao)
router.route("/avaliar/:userId/item/:movie_id/avaliacao").get(checkToken, ratingController.buscarAvalicao)
router.route("/avaliar/item/:movie_id/avaliacoes").get(checkToken, ratingController.buscarAvalicoesAll)
router.route("/avaliar/:userId/item/:movie_id/avaliacao/editar/:rating").put(checkToken, ratingController.editarAvaliacao)

module.exports = router;