
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const createCheckoutSession = require('./checkout')
const path = require('path')

const PORT = process.env.PORT || 3001;
const app = express()

//middleware
app.use(express.static("../client"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'))
})

//GET config
app.get("/config", (req, res) => res.send({ publishableKey: `${process.env.STRIPE_PUBLISHABLE_KEY}` }))
  
//POST payment
app.post("/payment", createCheckoutSession)

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

