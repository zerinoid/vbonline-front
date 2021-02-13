const express = require('express');
const router = express.Router();

// Controllers
const langController = require('../controllers/lang');
const sobreController = require('../controllers/sobre');
const listaDocsController = require('../controllers/video-list');
const saibaMaisController = require('../controllers/saiba-mais');
const vinhetaController = require('../controllers/vinheta');

// POST /api/lang/set/:name
router.post('/lang/set/:name', langController.setLang);

// GET /api/lang/get/:name
router.get('/lang/get', langController.getLang);

// GET /api/sobre
router.get('/sobre', sobreController.getSobre);

// GET /api/equipe
router.get('/equipe', sobreController.getEquipe);

// GET /api/video-list
router.get('/video-list', listaDocsController.getListaDocs);

// GET /api/saibamais
router.get('/saibamais', saibaMaisController.getSaibaMais);

// POST /api/vinheta/set
router.post('/vinheta/set', vinhetaController.setVinheta);

// GET /api/vinheta/set
router.get('/vinheta/get', vinhetaController.getVinheta);

// Export
module.exports = router;
