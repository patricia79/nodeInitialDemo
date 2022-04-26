
"use strict";

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const app = express();
const multer = require("multer");
const config = require("./config");
const userController = require('./controllers/userCtrl')
const uploadPost = require('./controllers/uploadCtrl')
const fileFilter = require('./middlewares/upload')
const error = require('./controllers/error')

require ( 'dotenv' ).config()

// habilitar la càrrega d'arxius
app.use(fileUpload({
  createParentPath: true,
  limits: { 
      fileSize: 2 * 1024 * 1024 * 1024 //2MB max file(s) size
  },
}));
 
// añadir middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());

// http://localhost:3000/mariano
app.get("/user", userController);
app.post('/upload', fileFilter, uploadPost);
app.get("/*", error);
app.post("/*", error);
app.put("/*", error);
app.delete("/*", error);


app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});