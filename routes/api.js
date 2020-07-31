const express = require('express');
const router = express.Router();

// Controllers
const sobreController = require('../controllers/sobre');
const listaDocsController = require('../controllers/lista-docs');

// GET /api/sobre
router.get('/sobre', sobreController.getSobre);

// GET /api/lista-docs
router.get('/lista-docs', listaDocsController.getListaDocs);

// Export
module.exports = router;
