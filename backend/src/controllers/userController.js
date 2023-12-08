require("dotenv").config();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer")

module.exports = {
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async findById(req, res) {
    try {
      const id = req.params.id;
      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ where: { email: email } });
      if (existingUser)
        return res.status(400).json({ error: "Este e-mail já está em uso." });

      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({ name, email, password: hashedPassword });

      res.status(201).json({ message: "Usuário inserido com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async update(req, res) {
    try {
      const { name, email, password } = req.body;
      const id = req.params.id;

      const hashedPassword = password
        ? await bcrypt.hash(password, 10)
        : undefined;

      const user = await User.findOne({ where: { id } });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }

      user.name = name || user.name;
      user.email = email || user.email;
      if (hashedPassword) user.password = hashedPassword;

      await user.save();
      res.status(201).json({ message: "Usuário atualizado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      const user = await User.destroy({ where: { id } });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }

      res.status(200).json({ message: "Usuário removido com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Email ou senha incorretos..." });
      }

      const userWithoutPassword = {
        id: user.id,
        name: user.name,
        email: user.email,
      };

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET
      );

      res.status(200).json({ token, user: userWithoutPassword });
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async recuperarSenha(req, res) {
    const { email } = req.body;

    try {
      const user = await User.findOne({ where: { email: email } });

      if (!user)
        return res.status(404).json({ message: "E-mail não registrado" });

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: '1h',
      });

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Recuperação de senha',
        text: `Olá, ${user.name}! Para recuperar a sua senha, acesse o link a seguir: http://localhost:${process.env.NODE_PORT}/luminacritics/users/redefinir-senha,
        copie e cole o token a seguir para criar uma nova senha: ${token}`,
      };

      await transporter.sendMail(mailOptions);

      res
        .status(200)
        .json({ message: "E-mail de recuperação enviado com sucesso!" });
    } catch (error) {
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  },
  async redefinirSenha(req, res){
    const { token, newPassword } = req.body;

    try{
      const decoded = jwt.verify(token, process.env.SECRET);
      if(!decoded) return res.status(404).json({ error: 'Token incorreto' });

      const user = await User.findByPk(decoded.id);
      if(!user) return res.status(404).json({ error: 'Usuário não encontrado' });

      const hashedPassword = await bcrypt.hash(newPassword, 10);

      await user.update({ password: hashedPassword })

      return res.status(200).json({ message: 'Senha atualizada com sucesso' });
    }catch(error){
      res.status(500).json({ error: "Erro interno do servidor!" });
    }
  }
};
