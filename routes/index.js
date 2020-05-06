var express = require('express');
var router = express.Router();
const IndexController = require('../controllers/IndexController')


router.get('/login', LoginController.index);

router.get('/inicio', InicioController.index);

router.get('/avisos', AvisosController.index);

router.get('/ocorrencias', OcorrenciasController.index);

router.get('/reservas', ReservasController.index);

router.get('/agenda', AgendaController.index);

router.get('/enquetes', EnquetesController.index);

router.get('/boleto', BoletoController.index);

router.get('/contas', ContasController.index);

router.get('/perdidos', perdidosController.index);

router.get('/gerenciarPerfis', GerenciarPerfisController.index);

router.get('/config', ConfigController.index);

router.get('/perfil', PerfilController.index);

module.exports = router;
