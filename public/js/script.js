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
                    var card_div = document.createElement('div');
                    card_div.style.width = '31%'
                    card_div.className = 'card'
                    var card_body = document.createElement('div');
                    card_body.className = 'card-body'
                    var card_title = document.createElement('h5');
                    card_title.className = 'card-title'
                    console.log(coin.name)
                    card_title.textContent = coin.name
                    var card_text = document.createElement('p');
                    card_text.className = 'card-text'
                    card_title.textContent = coin.quote.USD.price
                    var know_more = document.createElement('a');
                    know_more.className = 'btn btn-primary'
                    know_more.title = 'Know More!'
                    know_more.href = '/info/' + coin.symbol


                    card_body.appendChild(card_title)
                    card_body.appendChild(card_text)
                    card_body.appendChild(know_more)

                    card_div.appendChild(card_body)
                    row.appendChild(card_div)
                });
            }
        })
    })
}

setInterval(myfunc, 300000)