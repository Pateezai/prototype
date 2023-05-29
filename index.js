const express = require('express')
const app = express()
const PORT = 6000

app.listen(PORT, () => {
    console.log(`API listening at PORT ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('This is my API running')
})

app.get('/about', (req, res) => {
    res.send('This is about route')
})

module.exports = app