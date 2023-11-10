require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async findById(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.status(400).json({ message: "Usuário não encontrado!"});
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ name, email, password: hashedPassword });

      res.status(201).json({ message: "Usuário inserido com sucesso!"});
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async update(req, res) {
    try {
      const { name, email, password } = req.body;
      const id = req.params.id;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.status(400).json({ message: "Usuário não encontrado!"});
      }

      user.name = name || user.name;
      user.email = email || user.email;
      user.password = password || user.password;

      await user.save();
      res.status(201).json({ message: "Usuário atualizado com sucesso!"});
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      const user = await User.destroy({ where: { id } });

      if (!user) {
        return res.status(400).json({ message: "Usuário não encontrado!"});
      }

      res.status(200).json({ message: "Usuário removido com sucesso!"});
    } catch (error) {
      res.status(400).send(error);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado!"});
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Email ou senha incorretos..."});
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.SECRET
      );

      res.status(200).json({ token });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
