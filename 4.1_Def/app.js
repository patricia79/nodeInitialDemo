"use strict";

const express = require('express');
const app = express();
const config = require("./config");


// Aquí no tenim cap endpoint
app.get('/', (req, res) => {
    res.send('Home page')
  })
  
  //Aquí queda clar que es un endpoint
  app.get('/endpoint', (req, res) => {
    res.send('Això és un endpoint')
  })

  // Errors
  app.get('*', (req, res) => {
    res.send('404 Page not found')
  })

  app.listen(config.port, () => {
    console.log(`API REST en http://localhost:${config.port}/`);
  });

/*const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const _ = require('lodash');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
