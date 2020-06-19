const router = require('express').Router();
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join('tmp'))
  },
  filename: function (req, file, cb) {    
    cb(null, Date.now() + '-' + file.originalname)
  }
})   
let upload = multer({ storage: storage })

const {
  cadastroValidator,
  erroValidator,
} = require('../middlewares/validators');
const { CadastroController } = require('../controllers');

router.get('/cadastro', CadastroController.index);
router.post(
  '/cadastro',
  upload.single('foto'),
  cadastroValidator,
  erroValidator,  
  CadastroController.store
);


module.exports = router;
