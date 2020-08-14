const express = require('express');
const router = express.Router();

// Controllers
const langController = require('../controllers/lang');
const sobreController = require('../controllers/sobre');
const listaDocsController = require('../controllers/lista-docs');
const saibaMaisController = require('../controllers/saiba-mais');

// GET /api/lang/set/:name
router.get('/lang/set/:name', langController.setLang);

// GET /api/lang/get/:name
router.get('/lang/get', langController.getLang);

// GET /api/sobre
router.get('/sobre', sobreController.getSobre);

// GET /api/lista-docs
router.get('/lista-docs', listaDocsController.getListaDocs);

// GET /api/saibamais
router.get('/saibamais', saibaMaisController.getSaibaMais);

// Export
module.exports = router;
