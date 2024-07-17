const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const publicationsRouter = require('./routes/publications')

app.use('/', indexRouter)
app.use('/publications', publicationsRouter)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})