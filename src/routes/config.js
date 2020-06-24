const express = require('express');
const router = require('express').Router();
const multer = require('multer')
const path = require('path')
const { ConfigController } = require('../controllers');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('tmp'))
    },
    filename: function (req, file, cb) {    
      cb(null, Date.now() + '-' + file.originalname)
    }
  })   
let upload = multer({ storage: storage })


router.get('/config', ConfigController.index);
router.put('/config', ConfigController.update);
router.post('/configFotoUpdate', upload.single('foto'), ConfigController.fotoUpdate);
router.delete('/config/:id', ConfigController.destroy)

module.exports = router;
