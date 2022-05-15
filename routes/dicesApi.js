const { addPlayer, updatePlayer, getAllPlayers} = require('../controllers/playerMySQL');

const router = require('express').Router();

router.post('/players', addPlayer)
router.put('/players', updatePlayer)
router.get('/players', getAllPlayers)



module.exports = router;


