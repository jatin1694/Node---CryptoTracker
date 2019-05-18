const request = require('request')
const coin_info = (coin_symbol, callback) => {
    const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
    const url = 'https://min-api.cryptocompare.com/data/price?fsym=' + coin_symbol + '&tsyms=USD,JPY,EUR'

    request({ url: url, json: true }, (error, response) => {
        console.log(error)
        console.log(response)
        if (error) {
            callback('Unable to obtain the coin information', undefined)
        } else {
            const data = response.body
            callback(undefined, data)
        }
    })
}

coin_info('BTC', (error, data) => {
    console.log(error)
    console.log(data)
})

module.exports = coin_info