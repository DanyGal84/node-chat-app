const path = require('path')
const express = require('express')
const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index')
})

module.exports = app