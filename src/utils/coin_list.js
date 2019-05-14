const request = require('request')
const coin_list = (callback) => {
    const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
    const url = 'https://min-api.cryptocompare.com/data/all/coinlist'
        // const url_key = url + '&api_key=' + api_key

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to obtain the coin list', undefined)
        } else {
            const data = response.body.Data
            const coins = Object.keys(data)
            console.log(coins)
                //Returns first 30 coins
            callback(undefined, coins.slice(10, 40))
        }
    })
}

// coin_list((error, data) => {
//     console.log(error)
//     console.log(data)
// })

module.exports = coin_list