
"use strict";

const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const config = require("./config");
require ( 'dotenv' ).config()
const {user} = require('./controllers/user')
const {uploadPost} = require('./controllers/upload')
const {error} = require('./controllers/error404')
const {upload} = require('./middlewares/upload')
const cors = require('cors')

//console.log ( "hola",  process.env.NOMBRE)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

app.get("/user", user);
app.get("/*", error);
app.post("/*", error);
app.put("/*", error);
app.delete("/*", error);
app.post("/upload",upload, uploadPost);

app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/user`);
});