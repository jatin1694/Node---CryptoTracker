console.log("Your javascript file is loaded!")

var myfunc = () => {
    fetch('http://localhost:3000/coin_list').then((response) => {
        response.json().then((coins) => {
            if (coins.error) {
                console.log(coins.error)
            } else {
                var data = coins.data
                var row = document.querySelector(".row")
                data.forEach(coin => {
                    var card_text = document.querySelector('#' + coin.symbol)
                    card_text.textContent = coin.quote.USD.price
                });
            }
        })
    })
}

setInterval(myfunc, 300000)