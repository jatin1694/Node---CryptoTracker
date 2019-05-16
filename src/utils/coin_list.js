// const request = require('request')
const rp = require('request-promise');
const coin_list = (callback) => {
    // const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
    const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    const requestOptions = {
        method: 'GET',
        uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        headers: {
            'X-CMC_PRO_API_KEY': api_key
        },
        json: true
    };
    rp(requestOptions).then(response => {
        //Returns first 30 coins
        callback(undefined, response.data.slice(0, 30))
    }).catch((err) => {
        callback('Unable to obtain the coin list', undefined)
    });

}

coin_list((error, data) => {
    console.log(error)
    console.log(data[0])
})

module.exports = coin_list