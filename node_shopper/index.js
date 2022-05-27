const express = require('express')
const router = express.Router();
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/products', require('./routes/api/products'))
app.use('/api/carts', require('./routes/api/carts'))

var server = app.listen(3000, () => {
  console.log('Server started on port 3000')
})

module.exports = server