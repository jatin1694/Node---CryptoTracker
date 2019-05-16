// const rp = require('request-promise');

// const get_logo = (ids, callback) => {
//     const api_key = 'dfcbc5c1-28d7-438a-86a4-dfc5ab4dd14c'
//     const requestOptions = {
//         method: 'GET',
//         uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
//         qs: {
//             'id': ids
//         },
//         headers: {
//             'X-CMC_PRO_API_KEY': api_key
//         },
//         json: true
//     };

//     rp(requestOptions).then(response => {
//         callback(undefined, response)
//     }).catch((err) => {
//         callback(err, undefined)
//     });
// }

// get_logo((error, data) => {
//     console.log(error)
//     console.log(data)
// })


// module.exports = get_logo