const express = require('express')
const products = require('./data/products')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params._id)
  res.json(product)
})

app.listen(5000, console.log('Server running on port 5000'))

