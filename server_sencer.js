/* Crearem una API REST de resposta ràpida:

N1E1: Crea un servidor amb Express que retorni a una petició GET a l'endpoint /user un json amb el teu nom, 
edat i la url des d'on es fa la petició.
N1E2: Afegeix un endpoint /upload per a pujar al servidor un arxiu de tipus png, jpg o gif que retorni un missatge 
d'error en cas que l'extensió de l'arxiu no coincideixi amb aquestes.

N2E1: Creu un endpoint /time que rebi per POST com a paràmetre un JSON amb el nom d'usuari i retorni un objecte
 JSON que contingui l'hora i data actual. Inclogui un middleware que afegeixi la capçalera Cache-control: no-cache.
  Habiliti CORS (Cross-Origin Resource Sharing) en les respostes, ja sigui mitjançant Express o mitjançant un altre
   middleware.

N3E1: Afegeixi un middleware a l'endpoint anterior que retorni un HTTP Status 401 - Unauthorized si la capçalera de
 la petició no conté autenticació bàsica (usuari i contrasenya).*/

//server_sencer

"use strict";

const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const config = require("./config");
require ( 'dotenv' ).config()

//console.log ( "hola",  process.env.NOMBRE)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());


app.get("/user", (req, res) => {
  try {
    res.status(200).json({ "name": "Patricia",
    "edat": "25",
    "url": `http://localhost:${config.port}/user` });
  } catch (error) {
    res.status(500).json({ message: `Error: ${err} ` });
    
  }
});

app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/user`);
});
/*
app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    res.status(400).json({ error: "no arxiu png, jpg o gif" });
  } else {
    res.status(200).json({ result: "image uploaded" });
  }
});*/

