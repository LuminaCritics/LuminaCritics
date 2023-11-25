const express = require("express");
const cors = require("cors");
const Routes = require("./src/routes/routes");
const bodyParse = require("body-parser");
require("dotenv").config();
const morgan = require("morgan");
const app = express();

//Configuração de CORS para acesso
const corsOptions = {
  origin: '*',
  credentials: true,
  methods: "GET,PUT,POST,OPTIONS, DELETE",
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(bodyParse.urlencoded({ extended: false }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models/mainModel");

db.sequelize
  .sync()
  .then(() => {
    console.log("Sincronizando db");
  })
  .catch((err) => {
    console.log("Falha para reconhecer o db: " + err.message);
  });

//Rotas
app.use("/luminacritics", Routes);
app.get('/',(req, res)=>{
  res.send("Testando")
})
app.listen(process.env.NODE_PORT, () => {
  console.log(`SERVIDOR ESTÁ ATIVO NA PORTA ${process.env.NODE_PORT}`);
});
//console.log(process.env)
