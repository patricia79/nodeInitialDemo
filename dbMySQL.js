const mysql = require('mysql2')
const Sequelize = require("sequelize");
const config_db = require("./config");

const sequelize = new Sequelize(config_db.database, config_db.user, config_db.password, 
  {
    host: config_db.host,
    dialect: config_db.dialect,
  }
);

const PlayerMdl = require("./models/playerMdl");
const GameMdl = require("./models/gameMdl");

const Player1 = PlayerMdl(sequelize, Sequelize);
const Game1 = GameMdl(sequelize, Sequelize);


sequelize
  .sync()
  .then(() => {
    console.log("Synchronized tables");
  })
  .catch((error) => {
    console.log("Has occurred an error", error);
  });


module.exports = {
  Player1, Game1, sequelize, mysql
}


