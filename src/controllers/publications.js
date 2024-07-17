const fs = require('fs')
const path = require('path')

exports.getAllPublications = (req, res) => {
    const filePath = path.join(__dirname, '../data/articles.json')
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading articles')
            return
        }

        const articles = JSON.parse(data)

        let htmlContent = `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sprauer Avocats</title>
            </head>
            <body>
                <h1>Publications</h1>
                <ul>
        `

        articles.forEach(article => {
            htmlContent += `
                <li>
                    <h2>${article.title}</h2>
                    <p>${article.content}</p>
                </li>
            `
        })

        htmlContent += `
                </ul>
            </body>
            </html>
        `

        res.send(htmlContent)
    })
}
