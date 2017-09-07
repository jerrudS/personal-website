const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3011, () => {
  console.log('Listening on port 3011')
})
