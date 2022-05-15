const express = require('express');
const app = express();

const config = require("./config");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
require("dotenv").config();
const router = require('./routes/dicesApi')
/*
const { Player } = require("./dbMySQL");

const { addPlayer, updatePlayer, getAllPlayers} = require("./controllers/playerMySQL");
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/dicesApi', router);

/*

app.get("/players", playersGet);
app.get("/*", error);
app.post("/*", error);
app.put("/*", error);
app.delete("/*", error);
*/
app.listen(config.port, () => {
  console.log(`API REST en http://localhost:${config.port}/`);
});
