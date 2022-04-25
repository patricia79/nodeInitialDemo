/*
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

