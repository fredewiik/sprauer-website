// routes/publications.js
const express = require('express')
const router = express.Router()
const publicationsController = require('../controllers/publications')

// Route pour les publications
router.get('/', (req, res, next) => {
    res.set('Cache-Control', 'public, max-age=86400')
    next()
}, publicationsController.getAllPublications)

module.exports = router