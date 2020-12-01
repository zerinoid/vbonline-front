const express = require('express')
const router = express.Router()

// Controllers
const langController = require('../controllers/lang')
const sobreController = require('../controllers/sobre')
const listaDocsController = require('../controllers/lista-docs')
const saibaMaisController = require('../controllers/saiba-mais')
const vinhetaController = require('../controllers/vinheta')
const buttonConfig = require('../controllers/btn_config')

// POST /api/lang/set/:name
router.post('/lang/set/:name', langController.setLang)

// GET /api/lang/get/:name
router.get('/lang/get', langController.getLang)

// GET /api/sobre
router.get('/sobre', sobreController.getSobre)

// GET /api/lista-docs
router.get('/lista-docs', listaDocsController.getListaDocs)

// GET /api/saibamais
router.get('/saibamais', saibaMaisController.getSaibaMais)

// POST /api/vinheta/set
router.post('/vinheta/set', vinhetaController.setVinheta)

// GET /api/vinheta/set
router.get('/vinheta/get', vinhetaController.getVinheta)

//GET /api/btn_config
router.get('/btn_config', buttonConfig.getButtonConfig)

// Export
module.exports = router
