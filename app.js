const request = require('request')

const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR'
const coin_url = 'https://min-api.cryptocompare.com/data/all/coinlist'
const url_key = coin_url + '&api_key=' + api_key

request({ url: coin_url, json: true }, (error, response) => {
    const data = response.body.Data
    const coins = Object.keys(data)
    console.log(coins)
})