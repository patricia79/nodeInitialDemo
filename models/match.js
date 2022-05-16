const Player = require('./playerMdl')
const Game = require('./gameMdl');


Player.hasMany(Game);
Game.belongsTo(Player);
