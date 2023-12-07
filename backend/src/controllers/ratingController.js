const User = require("../models/userModel");
const Rating = require("../models/ratingModel");

module.exports = {
    async adicionarAvaliacao(req, res) {
        const { userId, movie_id, rating } = req.params;

        try {
          const user = await User.findOne({ where: { id: userId } });
          const checkRating = await Rating.findOne({ where: { userId: userId, movie_id: movie_id } });

          if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
          }
          if (checkRating)
            return res.status(409).json({ message: "Não é possível adicionar uma nova avaliação" })
    
          await user.createRating({ movie_id, rating });
    
          res.status(200).json({
            message: `Avaliação adicionada com sucesso!`,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },
    async buscarAvalicao(req, res) {
        const { userId, movie_id } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });
    
          const rating = await Rating.findOne({
            where: { userId: user.id, movie_id: movie_id },
          });

          if (!rating)
            return res.status(404).json({ message: "Nenhuma avaliação foi encontrada" })
    
          res.status(200).json(rating);
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    async buscarAvalicoesAll(req, res) {
        const { movie_id } = req.params;
    
        try {
          const rating = await Rating.findAll({
            where: { movie_id: movie_id },
          });

          if (!rating)
            return res.status(404).json({ message: "Nenhuma avaliação foi encontrada" })
    
          res.status(200).json(rating);
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    async editarAvaliacao(req, res) {
        const { userId, movie_id, rating } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
          const currentRating = await Rating.findOne({ where: { userId: userId, movie_id: movie_id } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });
          if (!currentRating)
            return res.status(404).json({ message: "Comentário não encontrado" });

            currentRating.rating = rating || currentRating.rating;
    
          await currentRating.save();
          res.status(201).json({ message: "Avaliação atualizado com sucesso!" });
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },
};