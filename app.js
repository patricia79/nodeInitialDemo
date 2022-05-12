const express = require('express');
const app = express();

const config = require("./config");
const bodyParser = require("body-parser");
require("dotenv").config();
const { Player } = require("./db");

const addPlayer = require("./controllers/playerCtrl");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/players", addPlayer);
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
