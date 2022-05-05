
"use strict";

const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const multer = require("multer");
const config = require("./config");
const userController = require('./controllers/userCtrl')
const timeController = require('./controllers/timeCtrl')
const uploadPost = require('./controllers/uploadCtrl')
const fileFilter = require('./middlewares/upload')
const cacheMiddleware = require('./middlewares/cacheMiddle')
const checkAuth = require('./middlewares/checkAuth')
const error = require('./controllers/error')

require ( 'dotenv' ).config()

// habilitar la càrrega d'arxius
app.use(fileUpload({
  createParentPath: true,
  limits: { 
      fileSize: 6 * 1024 * 1024 * 1024 //6MB max file(s) size
  },
}));
 
// añadir middlewares
app.use(cors({
  origin:'*'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());

// http://localhost:3009/mariano
app.get("/user", userController);
app.post('/upload', fileFilter, uploadPost);
app.post('/time', checkAuth, cacheMiddleware, timeController);
app.get("/*", error);
app.post("/*", error);
app.put("/*", error);
app.delete("/*", error);


app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});