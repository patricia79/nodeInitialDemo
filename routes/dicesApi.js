const { addPlayer, updatePlayer, getAllPlayers, deleteGames} = require('../controllers/playerMySQL');

const router = require('express').Router();

router.post('/players', addPlayer)
router.put('/players', updatePlayer)
router.get('/players', getAllPlayers)
router.delete('/players', deleteGames)

router.post("/*", error);
router.put("/*", error);
router.get("/*", error);
router.delete("/*", error);



module.exports = router;


