// routes/index.js
const express = require('express')
const path = require('path')
const router = express.Router()

// Route pour servir le fichier HTML statique
router.get('/', (req, res) => {
    res.set('Cache-Control', 'public, max-age=86400')
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router
