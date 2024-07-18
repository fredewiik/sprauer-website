if (typeof(PhusionPassenger) !== 'undefined') {
    PhusionPassenger.configure({ autoInstall: false });
}

const express = require('express')
const app = express()
const path = require('path')
const compression = require('compression')
const port = 3000

const publicationsRouter = require('./routes/publications')

app.use(compression())

app.use((req, res, next) => {
    // En-têtes de mise en cache pour toutes les réponses
    res.set('Cache-Control', 'public, max-age=86400') // 86400s = 24 heures
    next()
})

app.use(express.static(path.join(__dirname, '../dist')))

app.use('/publications', publicationsRouter)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../dist/404.html'));
})

if (typeof(PhusionPassenger) !== 'undefined') {
    app.listen('passenger')
} else {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
    })
}