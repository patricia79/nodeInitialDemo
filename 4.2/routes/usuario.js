const { Router } = require('express');
const { usuarioGet } = require('../controllers/usuario');

const router = Router();

router.get('/', usuarioGet);

module.exports = router;