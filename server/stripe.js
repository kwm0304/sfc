const stripeAPI = require("stripe");
const stripe = stripeAPI(process.env.STRIPE_SECRET_KEY);

module.exports = stripe;
