const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const { extractDesiredFields } = require("../util/animeUtils");
const axios = require("axios");

module.exports = {
    async adicionarComentario(req, res) {
        const { userId, movie_id, comment } = req.params;

        try {
          const user = await User.findOne({ where: { id: userId } });

          if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
          }
    
          const newComment = await user.createComment({ movie_id, comment });
    
          res.status(200).json({
            message: `Comentário adicionado com sucesso!`,
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Erro interno do servidor!" });
        }
    },

    async buscarComentarios(req, res) {
        const { userId } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });
    
          const comments = await Comment.findAll({
            where: { userId: user.id },
          });
    
          res.status(200).json(comments);
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    async buscarComentariosPorFilme(req, res) {
        const { userId, movie_id } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });
    
          const comments = await Comment.findAll({
            where: { userId: user.id, movie_id: movie_id },
          });
    
          res.status(200).json(comments);
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    async editarComentario(req, res) {
        const { userId, commentId, comment } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
          const commentary = await Comment.findOne({ where: { id: commentId } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });
          if (!commentary)
            return res.status(404).json({ message: "Comentário não encontrado" });

            commentary.comment = comment || commentary.comment;
    
          await commentary.save();
          res.status(201).json({ message: "Comentário atualizado com sucesso!" });
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },

    async deletarComentario(req, res) {
        const { userId, commentId } = req.params;
    
        try {
          const user = await User.findOne({ where: { id: userId } });
    
          if (!user)
            return res.status(404).json({ message: "Usuário não encontrado" });

          const commentary = await Comment.destroy({ where: { id: commentId } });

          if (!commentary)
            return res.status(404).json({ message: "Comentário não encontrado" });
    
          res.status(200).json({ message: "Comentário removido com sucesso!" });
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
    },
};