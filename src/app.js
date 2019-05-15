const path = require('path')
const express = require('express')
const hbs = require('hbs')
const coin_list = require('./utils/coin_list')
const coin_info = require('./utils/coin_info')

app = express()

const publicDirectory = path.join(__dirname, '../public')
const viewDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')

console.log(publicDirectory)

app.set('view engine', 'hbs')
app.set('views', viewDirectory)
hbs.registerPartials(partialsDirectory)
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


app.get('/info/:coin', (req, res) => {
    // res.send(req.params.coin)

    coin_info(req.params.coin, (error, response) => {
        if (error) {
            res.render('info', {
                name: req.params.coin,
                data: error
            })
        } else {
            res.render('info', {
                name: req.params.coin,
                data: response
            })
        }
    })
})


app.listen(3500, () => {
    console.log('Server is running!')
})