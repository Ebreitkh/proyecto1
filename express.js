var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('<b>hola</b>')
})
 
app.listen(3000)