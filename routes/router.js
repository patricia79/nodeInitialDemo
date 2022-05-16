const express = require('express')
const router = express.Router()

const { 
  addPlayer, 
  playerRollDices, 
  updatePlayer,
  deleteGames, 
  getAllPlayers, 
  playerGamesList,
  generalRanking,
  betterPlayer,
  worstPlayer

} = require('../controllers/controllersMySql');

  

router.post('/players', addPlayer) 
router.post('/players/:id/games', playerRollDices) 
router.put('/players/:id', updatePlayer) 
router.delete('/players/:id/games', deleteGames)
router.get('/players', getAllPlayers)
router.get('/players/:id/games', playerGamesList)
router.get('/players/ranking', generalRanking) 
router.get('/players/ranking/loser', worstPlayer )
router.get('/players/ranking/winner', betterPlayer)

module.exports = router