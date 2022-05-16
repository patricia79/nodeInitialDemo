const express = require('express')
const jocAPI = express.Router()
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

  

jocAPI.post('/players', addPlayer) //POST  crea un jugador
jocAPI.post('/players/:id/games', playerRollDices) //POST /players/{id}/games: un jugador específic realitza una tirada --Works
jocAPI.put('/players/:id', updatePlayer) //PUT  modifica el nom del jugador --Works
jocAPI.delete('/players/:id/games', deleteGames) // DELETE /players/{id}/games: elimina les tirades del jugador --Works
jocAPI.get('/players', getAllPlayers)//GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits --Works
jocAPI.get('/players/:id/games', playerGamesList)//GET /players/{id}/games: retorna el llistat de jugades per un jugador. --Works
jocAPI.get('/players/ranking', generalRanking) //GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors --Works
jocAPI.get('/players/ranking/loser', worstPlayer )//GET : retorna el jugador amb pitjor percentatge d’èxit --Works
jocAPI.get('/players/ranking/winner', betterPlayer)//GET : retorna el jugador amb millor percentatge d’èxit  --Works

module.exports = jocAPI, router