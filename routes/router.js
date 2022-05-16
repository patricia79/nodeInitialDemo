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

  

router.post('/players', addPlayer) //POST  crea un jugador
router.post('/players/:id/games', playerRollDices) //POST /players/{id}/games: un jugador específic realitza una tirada --Works
router.put('/players/:id', updatePlayer) //PUT  modifica el nom del jugador --Works
router.delete('/players/:id/games', deleteGames) // DELETE /players/{id}/games: elimina les tirades del jugador --Works
router.get('/players', getAllPlayers)//GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits --Works
router.get('/players/:id/games', playerGamesList)//GET /players/{id}/games: retorna el llistat de jugades per un jugador. --Works
router.get('/players/ranking', generalRanking) //GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors --Works
router.get('/players/ranking/loser', worstPlayer )//GET : retorna el jugador amb pitjor percentatge d’èxit --Works
router.get('/players/ranking/winner', betterPlayer)//GET : retorna el jugador amb millor percentatge d’èxit  --Works

module.exports = router