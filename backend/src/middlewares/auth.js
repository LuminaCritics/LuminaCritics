require('dotenv').config();
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcrypt");

async function hash(password) {
  return await bcryptjs.hash(password, 14);
}

async function compare(providedPassword, storedPassword) {
  return await bcryptjs.compare(providedPassword, storedPassword);
}

function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Acesso negado!" });

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();
  } catch (err) {
    res.status(400).json({ message: "O token é inválido!" });
  }
}

module.exports = checkToken, hash, compare;
