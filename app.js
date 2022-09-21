const express = require('express')

const app = express()

app.get('/',  function(req, res) {

    res.send('Hola Mundo')
})

app.listen(3000)
console.log('Server on port 3000')