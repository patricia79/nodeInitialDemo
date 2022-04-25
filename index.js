
"use strict";

const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const config = require("./config");
require ( 'dotenv' ).config()
const {user} = require('./controllers/user')

//console.log ( "hola",  process.env.NOMBRE)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.json());


app.get("/user", user);

app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/user`);
});