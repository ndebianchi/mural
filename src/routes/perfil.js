const router = require('express').Router();

const { PerfilController } = require('../controllers');

router.get('/perfil', PerfilController.index);

module.exports = router;
