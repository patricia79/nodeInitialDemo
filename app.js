const express = require('express');
const app = express();

const config = require("./config");
const bodyParser = require("body-parser");
const { sequelize } = require('./dbMySQL')

require("dotenv").config();
const router = require('./routes/dicesApi')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);


sequelize.sync({ force: false }).then(() => {
  console.log("Synchronized tables");
}).catch(error => {
  console.log('Has occurred an error', error);
});

sequelize.drop().then(() => {
  console.log("Deleted tables");
}).catch(error => {
  console.log('Has occurred an error', error);
});

app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});
