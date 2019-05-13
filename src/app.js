const path = require('path')
const express = require('express')

const app = express()

console.log(path.join(__dirname, '../public'))

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.send()
})

app.listen(3000, () => {
    console.log('Server is running!')
})