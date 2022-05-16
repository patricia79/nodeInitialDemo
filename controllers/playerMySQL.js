
const Sequelize = require('sequelize')
const sequelize = require("../dbMySQL")
const Player = require("../models/playerMdl")
const uniqid = require('uniqid')
const { dice_game, date_now } = require('../game_logic')

//TODO POST /players: crea un jugador/ addPlayer

const addPlayer = async (req, res) => {
  try {
    let name = req.body.namePlayer;
    name ? true : (name = uniqid("ANONYMOUS-"));
    const playerCreated = await Player.create({ name });
    res
      .status(200)
      .json({
        message: `${playerCreated} created successfully!! Congratulations!!!`,}); // Jugador creat`})}
  } catch {
    if (!req.body) {
      res.status(400).json({ message: ` ${err}` }); 
    }
  }
};

//TODO PUT /players: modifica el nom del jugador/ updatePlayer

const updatePlayer = async (req, res) => {
  let id = req.params.idPlayer;
  let update = req.body.namePlayer;
  try {
    await Player.findByIdAndUpdate(id, update, (err, playerUpdated) => {
      res.status(200).json({ Player: playerUpdated });
    });
  } catch {
    if (err) {
      res.status(500).json({ message: `Error updating player: ${err}` });
    }
  }
};


//TODO GET /players/ranking: retorna el percentatge mig d’èxits del conjunt de tots els jugadors /ranking




//TODO GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits/getAllPlayers

const getAllPlayers = async (req, res) => {
  const players = await Player.findAll({
    attributes: ["idPlayer", "namePlayer", "winRatio"], include:[Game]
  });
  res.status(200).json({ players });
};


//TODO DELETE /players/{id}/games: elimina les tirades del jugador / deleteGames

const deleteRounds = async (req, res) => {
  const id = req.params.idGames;
  try { // diceThrow= tirar dados
    await diceThrow.destroy({ where: { id: idGames } });
    await Player.update(
      {
        totalPlayed: 0,
        score: 0, //total guanyats
        winRatio: 0, //promig guanyats
      },
      { where: { id: idGames } }
    );
    const player = await Player.findAll({ where: { id: idPlayer} });
    res.status(200).json({ player });
  } catch (err) {
    res.status(400).json({ message: ` ${err}` });
  }
};

//TODO POST /players/{id}/games: un jugador específic realitza una tirada /

const addRound = async(req, res) => {
    const PlayerId = req.params.idGames
      const {dice1, dice2, result1, result_S} = dice_game()
         try{
            const diceThrow = await Game.create({dice1, dice2, result1, result_S,PlayerId,})  
            if(result_S === 'win') await Player.increment(['totalPlayed','score'],{where:{id:PlayerId}})
            if(result_S === 'lose') await Player.increment('totalPlayed',{where:{id:PlayerId}})
            const player = await Player.findAll({attributes:['totalPlayed','score'],where:{id:PlayerId}})
            const { totalPlayed, score } =player[0].dataValues
            const winRate = (score/totalPlayed)*100
                       
            await Player.update({winRate},{where:{id:PlayerId}})
                  
            const playerRolled = await Player.findAll({attributes:['namePlayer'], where:{id:PlayerId}})
      
            res.status(200).json({playerRolled, diceThrow})
      
          } catch (err) {
            res.status(400).json({ message: ` ${err}` });
          }
        }

  
  //TODO GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits /getAllPlayers

const playersListWinRatio = async(req, res) => {
  const id = req.params.idPlayer
  try{
   const player = await Player.findAll({attributes:['idPlayer','namePlayer'],where:{id:idGames},include:[Game]})
      res.status(200).json(player)
    } catch (err) {
      res.status(404).json({message: ` ${err}` })
    }
  }
  //TODO GET /players/{id}/games: retorna el llistat de jugades per un jugador
  
  const rounds = async(req, res) => {
    try {
      const totalPlayers = await Player.count()
      const gralWinRatio = sumWinRatio/totalPlayers
      const sumWinRatio = await Player.sum('WinRatio')
      res.status(200).json({gralWinRatio})
    } catch(err){
      res.status(500).json({message: ` ${err}` })
    }
  }

  //TODO GET /players/ranking/winner: retorna el jugador amb millor percentatge d’èxit 

  const getWinner = async(req, res) => {
    const bestWinRatio = await Player.max('winRatio')
      try {
      const player = await Player.findAll({where:{winRatio:bestWinRatio}})
      res.status(200).json({ player })
    } catch (err) {
      res.status(500).json({message: ` ${err}` })
    }
    }
  
//TODO GET /players/ranking/loser: retorna el jugador amb pitjor percentatge d’èxit 

const getLoser = async(req, res) => {
  const worstWinRatio = await Player.min('winRatio')
  try {
    const player = await Player.findAll({where:{winRatio:worstWinRatio}})
    res.status(200).json({ player })
  } catch (err) {
    res.status(500).json({message: ` ${err}` })
  }
}
 module.exports = { 
   addPlayer, updatePlayer, getAllPlayers, deleteRounds, addRound, rounds, getLoser, playersListWinRatio,
  getWinner};
