const express = require("express");
const userController = require("../controllers/userController");
const movieController = require("../controllers/movieController");
const commentController = require("../controllers/commentController");
const ratingController = require("../controllers/ratingController");
const checkToken = require("../middlewares/auth");
const { insertValidation, updateValidation, loginValidation } = require("../middlewares/validationMiddleware");
const router = express.Router();

router.route("/users").get(checkToken, userController.getAll);
/**{
    "name": "Luccas Souza",
    "email": "luscca@gmail.com",
    "password": "luccaslindo"
} */
router.route("/users/create").post(insertValidation, userController.create);
/**{
    "email": "luscca@gmail.com",
    "password": "luccaslindo"
} */
router.route("/users/login").post(loginValidation, userController.login);
router.route("/users/:id")
  /**{
    "email":"luscca2@gmail.com"
} */
  .put(updateValidation, checkToken, userController.update)
  .get(checkToken, userController.findById)
  .delete(checkToken, userController.delete);
/**{
    "email":"emaildocastro.adm01@gmail.com"
} */
router.route("/users/recuperar-senha").post(userController.recuperarSenha)
/**{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcwMDI3MDA2MywiZXhwIjoxNzAwMjczNjYzfQ.1dO21TlvMRj51d9sr36pm3HmB8Qomd3s2C31nZuY-qs",
    "newPassword":"l1u2c3c4a5s6"
} */
router.route("/users/redefinir-senha").post(userController.redefinirSenha)

router.route("/filmes/buscar/:query").get(movieController.buscarFilmes)
router.route("/filmes/:query/details").get(movieController.buscarFilmeInfo)
/**{
  "id": null,
  "genres": [
    {
      "id": 14,
      "name": "Fantasia"
    },
    {
      "id": 28,
      "name": "Ação"
    }
  ],
  "popularity": 0,
  "title": "A volta dos que não foram 2",
  "overview": "Os que não foram, acabaram de voltar DE NOVO!",
  "release_date": "2023-12-06",
  "backdrop_path": "https://imgur.com/HrP0TMZ",
  "poster_path": "https://imgur.com/HrP0TMZ"
}
 */
router.route("/filmes/adicionar").post(checkToken, movieController.adicionarFilme)
router.route("/filmes/trending").get(movieController.getTrendingMovies)
router.route("/filmes/popular").get(movieController.getPopularMovies)

router.route("/comentario/:userId/comentar/:movie_id").post(checkToken, commentController.adicionarComentario)
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