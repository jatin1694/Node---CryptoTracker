const path = require('path')
const express = require('express')
const coin_list = require('./utils/coin_list')

app = express()

const publicDirectory = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewDirectory)
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    coin_list((error, data) => {
        if (error) {
            res.render('index', {
                data: error
            })
        } else {
            res.render('index', {
                data: data
            })
        }
    })
})

app.listen(3500, () => {
    console.log('Server is running!')
})