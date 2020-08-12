const express = require('express');
const router = express.Router();

// Controllers
const sobreController = require('../controllers/sobre');
const listaDocsController = require('../controllers/lista-docs');
const saibaMaisController = require('../controllers/saiba-mais');

// GET /api/sobre
router.get('/sobre', sobreController.getSobre);

// GET /api/lista-docs
router.get('/lista-docs', listaDocsController.getListaDocs);

// GET /api/saibamais
router.get('/saibamais', saibaMaisController.getSaibaMais);

// Export
module.exports = router;
