const User = require("../models/userModel");
const Movie = require("../models/movieModel");
const axios = require("axios");
const slugify = require("slugify");
const { Sequelize } = require("sequelize");
require("dotenv").config();

module.exports = {
  async buscarFilmes(req, res) {
    const { query } = req.params;

    const base_url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.API_KEY}&language=pt-BR`;
    let data = [];

    try {
      let response = await axios.get(base_url);
      let totalPages = response.data.total_pages;

      let filmesCadastrados = await Movie.findAll({
        where: {
          title: {
            [Sequelize.Op.like]: query,
          },
        },
        attributes: ["id", "title", "overview", "poster_path", "release_date"],
      });

      data = data.concat(filmesCadastrados);

      for (let page = 1; page <= totalPages; page++) {
        let url = `${base_url}&page=${page}`;
        let movies;
        await axios.get(url).then((response) => {
          movies = response.data.results.map((result) => ({
            id: result.id,
            title: result.title,
            overview: result.overview,
            poster_path: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            release_date: result.release_date,
          }));
        });
        data = data.concat(movies);
      }

      if (data.length === 0) {
        res.json({ message: "Nenhum filme encontrado" });
      } else {
        res.json(data);
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro interno do servidor: ${error.message}` });
    }
  },
  async buscarFilmeInfo(req, res) {
    const { query } = req.params;

    try {
      let movieDetails = await Movie.findOne({
        where: {
          id: {
            [Sequelize.Op.eq]: query,
          },
        },
      });

      if (!movieDetails) {
        const url = `https://api.themoviedb.org/3/movie/${query}?api_key=${process.env.API_KEY}&language=pt-BR`;

        await axios.get(url).then((response) => {
          movieDetails = {
            genres: response.data.genres,
            popularity: response.data.popularity,
            title: response.data.title,
            overview: response.data.overview,
            release_date: response.data.release_date,
            backdrop_path: `https://image.tmdb.org/t/p/w500${response.data.backdrop_path}`,
          };
        });
      }

      res.json(movieDetails);
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro interno do servidor: ${error.message}` });
    }
  },
  async adicionarFilme(req, res) {
    try {
      const {
        id,
        genres,
        popularity,
        title,
        overview,
        release_date,
        backdrop_path,
        poster_path,
      } = req.body;

      await Movie.create({
        id,
        genres,
        popularity,
        title: slugify(title, {
          lower: true,
          remove: /[*+~.()'"!:@]/g,
          strict: true,
        }),
        overview,
        release_date,
        backdrop_path,
        poster_path,
      });

      res.status(201).json({ message: "Filme inserido com sucesso!" });
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro interno do servidor: ${error.message}` });
    }
  },
  async getTrendingMovies(req, res) {
    const url = `https://api.themoviedb.org/3/trending/movie/day?language=pt-BR'&api_key=${process.env.API_KEY}`;

    try {
      await axios.get(url).then((response) => {
        const data = response.data.results.map((result) => ({
          id: result.id,
          title: result.title,
          overview: result.overview,
          poster_path: result.poster_path,
          release_date: result.release_date,
        }));
        if(data){
          res.json(data)
        }else{
          res.json({ message: "Nenhum filme encontrado!"})
        }
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro interno do servidor: ${error.message}` });
    }
  },
  async getPopularMovies(req, res){
    const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&region=Brazil'&api_key=${process.env.API_KEY}`;

    try {
      await axios.get(url).then((response) => {
        const data = response.data.results.map((result) => ({
          id: result.id,
          title: result.title,
          overview: result.overview,
          poster_path: result.poster_path,
          release_date: result.release_date,
        }));
        if(data){
          res.json(data)
        }else{
          res.json({ message: "Nenhum filme encontrado!"})
        }
      });
    } catch (error) {
      res
        .status(500)
        .json({ error: `Erro interno do servidor: ${error.message}` });
    }
  }
};
