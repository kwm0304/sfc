const express = require('express')
const app = express()
require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const bodyParser = require('body-parser')
const cors = require('cors')

//middleware
app.use(express.static("../client"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

//GET config
app.get("/config", (req, res) => {
  res.send ({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  })
  console.log('PK', publishableKey)
})
//POST payment
app.post("/payment", async (req, res) => {
  
  
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      description: "Soles-For-Christ",
      receipt_email: "mckenzie.kenan@yahoo.com"
    })
    res.send({ clientSecret: paymentIntent.client_secret })
    console.log("Payment", paymentIntent)
  } catch (error) {
    console.log("Error", error)
    return res.status(400).send({
      error: {
        message: error.message
  }
})
}
})

app.listen(4000, () => {
  console.log("Server is listening on port 4000")
})