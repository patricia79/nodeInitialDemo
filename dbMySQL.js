const mysql = require('mysql2')
const Sequelize = require("sequelize");
const config_db = require("./config");
const PlayerMdl = require("./models/playerMdl");
const GameMdl = require("./models/gameMdl");


const sequelize = new Sequelize(config_db.database, config_db.user, config_db.password, 
  {
    dialect: 'mysql',
  }
);

const Player = PlayerMdl(sequelize, Sequelize);
const Game = GameMdl(sequelize, Sequelize);

Player.hasMany(Game);
Game.belongsTo(Player);


async function connectMySQLDB(){
    
  const connection = mysql.createConnection({ host: config_db.host, user:config_db.user, password:config_db.password});
  connection.query(`CREATE DATABASE IF NOT EXISTS \`${config_db.database}\`;`, (err, result) =>{
      if(err) throw err
      sequelize.sync()
      .then(()=>console.log("Synchronized tables"))
      .catch(err=>console.log("Has occurred an error", err))
  })
  connection.end();
}

module.exports = {
  Player, Game, sequelize
}


