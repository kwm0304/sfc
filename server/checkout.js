const stripeAPI = require("./stripe");
const stripe =require('stripe')(process.env.STRIPE_SECRET_KEY)

async function createCheckoutSession(req, res) {
  //doesnt get logged
  console.log("createCheckout");
  //the web app url will be the business url customers will be redirected to after checkout
  const { line_items, customer_email } = req.body;
  
  
  //check req body has line items and email
  if (!line_items || !customer_email) {
    return res
      .status(400)
      .json({ error: "missing required session parameters" });
  }

  let session;
  //never logs these but returns 401 error not  400
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items,
      customer_email,
      metadata: {
        customer_first_name,
        customer_last_name
      },
      //will be the url the deployed app will be linked to
      success_url: "https://soles-for-christ.herokuapp.com/",
      cancel_url: "https://soles-for-christ.herokuapp.com/",
      submit_type: "donate",
    });
    
    res.status(200).json({sessionId: session.id}) 
  } catch (error) {
    console.log("error", error);
    res
      .status(401)
      .json({ error: "an error occured, unable to create session" });
  }
}
module.exports = createCheckoutSession;
