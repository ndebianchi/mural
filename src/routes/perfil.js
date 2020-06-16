const router = require('express').Router();

const { PerfilController } = require('../controllers');

router.get('/perfil', PerfilController.index);
router.delete('/perfil/:id', PerfilController.destroy);

router.get('/morador', PerfilController.perfilMorador);

module.exports = router;
