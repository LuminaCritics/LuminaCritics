function insertValidation(req, res, next) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Por favor, preencha os dados corretamente!" });
  }

  if (name === " " || name === "") {
    return res
      .status(400)
      .json({ message: "Por favor, preencha o nome corretamente!" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email === " " || email === "") {
    return res
      .status(400)
      .json({ message: "Por favor, insira um e-mail válido!" });
  }

  if (password.length < 6 || password === " " || password === "") {
    return res.status(400).json({
      message: "Por favor, insira uma senha com no mínimo 6 caracteres!",
    });
  }

  next();
}

function updateValidation(req, res, next) {
  const { name, email, password } = req.body;

  if ((name && name === " ") || name === "") {
    return res.status(400).json({
      message: "Por favor, insira um nome válido!",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if ((email && !emailRegex.test(email)) || email === " " || email === "") {
    return res
      .status(400)
      .json({ message: "Por favor, insira um e-mail válido!" });
  }

  if (
    (password && password.length < 6) ||
    password === " " ||
    password === ""
  ) {
    return res
      .status(400)
      .json({ message: "Por favor, insira uma senha com no mínimo 6 dígitos" });
  }

  next();
}

function loginValidation(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Por favor, preencha os dados corretamente!" });
  }

  next();
}

module.exports = { insertValidation, updateValidation, loginValidation };
