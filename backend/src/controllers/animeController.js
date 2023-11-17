const User = require("../models/userModel");
const FavoriteAnime = require("../models/favoriteAnimeModel");
const { extractDesiredFields } = require("../util/animeUtils");
const axios = require("axios");

module.exports = {
  async buscarAnimes(req, res) {
    const { query } = req.params;
    const pageNumber = req.query.page || 1;

    const url = `https://api.consumet.org/anime/gogoanime/${query}?page=${pageNumber}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      res.json(data);
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro ao buscar dados dos animes: ${error.message}` });
    }
  },
  async buscarAnimeInfo(req, res) {
    const { query } = req.params;

    const url = `https://api.consumet.org/anime/gogoanime/info/${query}`;

    try {
      const response = await axios.get(url);
      const animeDetails = extractDesiredFields(response.data);

      res.json(animeDetails);
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro ao buscar dados dos animes: ${error.message}` });
    }
  },
  async adicionarFavorito(req, res) {
    const { userId, animeName } = req.params;

    try {
      const user = await User.findOne({ where: { id: userId } });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" });
      }

      const novoAnime = await user.createFavoriteAnime({ animeName });

      res.status(200).json({
        message: `Anime ${novoAnime.animeName} adicionado com sucesso!`,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async buscarAnimesFavoritos(req, res) {
    const { userId } = req.params;

    try {
      const user = await User.findOne({ where: { id: userId } });

      if (!user)
        return res.status(404).json({ message: "Usuário não encontrado" });

      const animesFavoritos = await FavoriteAnime.findAll({
        where: { userId: user.id },
      });

      res.status(200).json(animesFavoritos);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};
