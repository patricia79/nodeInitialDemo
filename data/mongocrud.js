const { Player, Game }  = require ("./connectmongodb");

async function  addNewPlayerData(player) {  // bbdd: constructor
    const newPlayer = new Player();
    newPlayer.name = player.name;
    newPlayer.register_date = player.register_date;
    newPlayer.totalGames = player.totalGames;
    newPlayer.totalWins = player.totalWins;
    newPlayer.winRatio = player.winRatio;
    return await Player.create(newPlayer);
 }


async function  getAllPlayersData() {
    return await Player.find();
}

async function getPlayerData(id) {
    return await Player.findOne({where: {idPlayer: id}});
}
    
async function addGameData(game) {
    const newGame = new Game();
    newGame.PlayerIdPlayer = game.idPlayer;
    newGame.date = game.date;
    newGame.result = game.result;
    return await Game.create(newGame);
}

async function getAllGamesData(player) {
    //PlayerIdPlayer es la columna de base de datos de la tabla games dnd se almacenan las id de los player (ForeignKey)
    return await Game.find({where: {PlayerIdPlayer: player.id}});
}
    
async function deletePlayerGamesData(game) {
    return await Game.deleteMany({where: {PlayeridPlayer: game.idPlayer}});
}

async function  getAllPlayersRanking() {
    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}});
}

async function modifyNamePlayerData(player) {
    return await Player.update({name: player.name}, {where: {idPlayer: player.id}});
}
async function updatePlayerData(player) {

// de fet he actualitzat l'objecte player sencer

    return await Player.update({name: player.name, register_date: player.register_date, totalGames: player.totalGames, totalWins: player.totalWins, winRatio: player.winRatio }, {where: {idPlayer: player.id}});

}


async function  getLoserPlayersRanking() {

    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'ASC']], limit: 1});
}

async function  getWinnerPlayersRanking () {

    return await Player.findAll({where: {totalGames: {[Op.gt]: 0}}, order: [['winRatio', 'DESC']], limit: 1});
}





module.exports = { 
    addNewPlayerData, 
    getAllPlayersData, 
    getPlayerData, 
    addGameData,   
    getAllGamesData, 
    deletePlayerGamesData, 
    getAllPlayersRanking, 
    modifyNamePlayerData, 
    updatePlayerData,
    getLoserPlayersRanking, 
    getWinnerPlayersRanking,
};
