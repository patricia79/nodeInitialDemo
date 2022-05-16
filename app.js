const express = require('express');
const app = express();

const config = require("./config");
const bodyParser = require("body-parser");

require("dotenv").config();
const router = require('./routes/dicesApi')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);


app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});
