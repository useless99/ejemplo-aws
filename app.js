const express = require('express')

const app = express()

app.get('/',  function(req, res) {

    res.send('Bienvenidos al curso de seminario de sistemas 2022')
})

app.listen(3000)
console.log('Server on port 3000')