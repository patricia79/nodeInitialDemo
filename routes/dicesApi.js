const { addPlayer, updatePlayer, getAllPlayers, deleteRounds, addRound, playerRounds, getLoser, playersListWinRatio,
    getWinner} = require('../controllers/playerMySQL');

const router = require('express').Router();


router.post('/players', addPlayer) 
router.post('/players/:id/games', addRound) 
router.put('/players/:id', updatePlayer) 
router.delete('/players/:id/games', deleteRounds) 
router.get('/players', getAllPlayers)
router.get('/players/:id/games', playerRounds )
router.get('/players/ranking', playersListWinRatio) 
router.get('/players/ranking/loser', getLoser )
router.get('/players/ranking/winner', getWinner)

module.exports = router;


