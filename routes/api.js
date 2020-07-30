const express = require('express');
const router = express.Router();

// Controllers
const sobreController = require('../controllers/sobre');

// GET /api/sobre
router.get('/sobre', sobreController.getSobre);

// Export
module.exports = router;