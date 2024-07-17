// routes/publications.js
const express = require('express')
const router = express.Router()
const publicationsController = require('../controllers/publications')

// Route pour les publications
router.get('/', publicationsController.getAllPublications)

module.exports = router
