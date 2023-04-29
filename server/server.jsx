require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const  createCheckoutSession  = require('./checkout')
const path = require('path')

const PORT = process.env.PORT
//middleware
app.use(express.static("../client"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

//GET config
app.get("/config", (req, res) => res.send({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY }))
  
//POST payment
app.post("/payment", createCheckoutSession)

app.listen(PORT, () => {
  console.log('Server is listening ')
})

