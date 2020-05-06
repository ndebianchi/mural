var express = require('express');
var router = express.Router();

const LoginController = require('../controllers/LoginController')
const InicioController = require('../controllers/InicioController')
const AvisosController = require('../controllers/AvisosController')
const OcorrenciasController = require('../controllers/OcorrenciasController')
const ReservasController = require('../controllers/ReservasController')
const AgendaController = require('../controllers/AgendaController')
const EnquetesController = require('../controllers/EnquetesController')
const BoletoController = require('../controllers/BoletoController')
const ContasController = require('../controllers/ContasController')
const perdidosController = require('../controllers/perdidosController')
const GerenciarPerfisController = require('../controllers/GerenciarPerfisController')
const ConfigController = require('../controllers/ConfigController')
const PerfilController = require('../controllers/PerfilController')


router.get('/login', LoginController.index);

router.get('/inicio', InicioController.index);

router.get('/avisos', AvisosController.index);

router.get('/ocorrencias', OcorrenciasController.index);

router.get('/reservas', ReservasController.index);
router.get('/reservas-agenda', ReservasController.reservasAgenda);

router.get('/agenda', AgendaController.index);

router.get('/enquetes', EnquetesController.index);

router.get('/boleto', BoletoController.index);

router.get('/contas', ContasController.index);
router.get('/editar-gastos', ContasController.editarGastos);

router.get('/perdidos', perdidosController.index);

router.get('/gerenciarPerfis', GerenciarPerfisController.index);

router.get('/config', ConfigController.index);

router.get('/perfil', PerfilController.index);


module.exports = router;